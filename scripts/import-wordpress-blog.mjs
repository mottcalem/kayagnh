/**
 * Parse WordPress WXR export → lib/blog-posts.json
 * Run: node scripts/import-wordpress-blog.mjs [path-to.xml]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultXml = path.resolve(
  __dirname,
  '../../.cursor/projects/Users-ugur-Desktop-kayagnh/attachments/0a2af4cd-ebef-4d02-a99a-ad1a3c43710b/kayagreatnorthernhotel.WordPress.2026-09-23.xml',
);

const xmlPath = process.argv[2] || defaultXml;
const outPath = path.resolve(__dirname, '../lib/blog-posts.json');

const PROMO_PANEL_TITLES = new Set([
  'Our History',
  'Our Rooms',
  'RAILS Restaurant & Little Bar',
  'GNH Bar',
]);

function cdata(block, tag) {
  const re = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`);
  const m = block.match(re);
  if (m) return m[1].trim();
  const plain = new RegExp(`<${tag}>([^<]*)<\\/${tag}>`);
  const p = block.match(plain);
  return p ? p[1].trim() : '';
}

function attrValue(attrs, name) {
  const m = attrs.match(new RegExp(`${name}="([^"]*)"`));
  return m ? m[1] : '';
}

function decodeSpbPayload(payload) {
  let text = payload.trim();

  if (/^[A-Za-z0-9+/=\s]+$/.test(text) && text.length > 40) {
    try {
      const decoded = Buffer.from(text.replace(/\s/g, ''), 'base64').toString('utf8');
      if (decoded.includes('%') || decoded.includes('<')) {
        text = decoded;
      }
    } catch {
      /* keep text */
    }
  }

  for (let i = 0; i < 4; i += 1) {
    if (!text.includes('%')) break;
    try {
      const next = decodeURIComponent(text.replace(/\+/g, ' '));
      if (next === text) break;
      text = next;
    } catch {
      break;
    }
  }

  return text;
}

function formatStrongList(body) {
  const chunks = body.split(/(?=<strong>)/i);
  let html = '';
  const lead = chunks[0]?.trim();

  if (lead && !/^<strong>/i.test(lead)) {
    html += `<p class="blog-panel-lead">${lead.replace(/\n+/g, ' ').trim()}</p>`;
  }

  const start = lead && !/^<strong>/i.test(chunks[0]) ? 1 : 0;
  for (let i = start; i < chunks.length; i += 1) {
    const m = chunks[i].match(/^<strong>([\s\S]*?)<\/strong>\s*([\s\S]*)/i);
    if (m) {
      html += `<article class="blog-spot"><h3 class="blog-spot-title">${m[1].trim()}</h3><p>${m[2].trim().replace(/\n+/g, ' ')}</p></article>`;
    }
  }
  return html;
}

function formatPanelBody(inner) {
  const body = decodeSpbPayload(inner).replace(/\r\n/g, '\n').trim();
  if (!body) return '';

  if (
    body.includes('impact-text-large') ||
    /<img[\s>]/i.test(body) ||
    /<ul[\s>]/i.test(body) ||
    /<ol[\s>]/i.test(body) ||
    /<h[2-6][\s>]/i.test(body)
  ) {
    return body;
  }

  if (/<strong>/i.test(body)) {
    return formatStrongList(body);
  }

  return body
    .split(/\n\s*\n+/)
    .filter(Boolean)
    .map((p) => {
      const t = p.trim();
      if (t.startsWith('<')) return t;
      return `<p>${t}</p>`;
    })
    .join('\n');
}

function panelWrap(title, bodyHtml) {
  const promo = PROMO_PANEL_TITLES.has(title) ? ' blog-panel--promo' : '';
  const centered =
    !bodyHtml.includes('blog-spot') && !bodyHtml.includes('impact-text-large')
      ? ' blog-panel--centered'
      : '';
  const bannerLabel = title.includes('•') ? title : `• ${title.toUpperCase()} •`;

  return `<section class="blog-panel${promo}${centered}"><div class="blog-panel-banner"><span>${bannerLabel}</span></div><div class="blog-panel-body">${bodyHtml}</div></section>`;
}

function transformContent(raw, attachments) {
  if (!raw) return '';

  let html = raw;

  html = html.replace(/\[spb_accordion[^\]]*\]([\s\S]*?)\[\/spb_accordion\]/gi, (_, inner) => {
    const tabs = [
      ...inner.matchAll(
        /\[spb_accordion_tab title="([^"]*)"[^\]]*\][\s\S]*?\[spb_text_block[^\]]*\]([\s\S]*?)\[\/spb_text_block\][\s\S]*?\[\/spb_accordion_tab\]/gi,
      ),
    ];
    const items = tabs
      .map((t) => {
        const q = t[1].trim();
        const a = formatPanelBody(t[2]);
        return `<details class="blog-faq-item"><summary>${q}</summary><div class="blog-faq-answer">${a}</div></details>`;
      })
      .join('');
    return `<section class="blog-panel blog-panel--faq"><div class="blog-panel-banner"><span>• FAQ •</span></div><div class="blog-panel-body blog-faq">${items}</div></section>`;
  });

  html = html.replace(/\[spb_text_block([^\]]*)\]([\s\S]*?)\[\/spb_text_block\]/gi, (_, attrs, inner) => {
    const title = attrValue(attrs, 'title');
    const body = formatPanelBody(inner);
    if (title) return panelWrap(title, body);
    return body;
  });

  html = html.replace(
    /\[spb_image_banner[^\]]*image="(\d+)"[^\]]*\]\s*\[\/spb_image_banner\]/gi,
    (_, id) => {
      const url = attachments.get(id);
      if (!url) return '';
      return `<figure class="blog-figure"><img src="${url}" alt="" loading="lazy" decoding="async" /></figure>`;
    },
  );

  html = html.replace(/\[spb_raw_html[^\]]*\]([\s\S]*?)\[\/spb_raw_html\]/gi, (_, inner) =>
    decodeSpbPayload(inner),
  );

  html = html.replace(
    /\[sf_button[^\]]*link="([^"]*)"[^\]]*target="([^"]*)"[^\]]*\]([\s\S]*?)\[\/sf_button\]/gi,
    (_, link, target, label) => {
      const t = target === '_blank' ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<p class="blog-cta"><a class="btn btn-primary" href="${link}"${t}>${label.trim()}</a></p>`;
    },
  );

  html = html.replace(
    /\[sf_button[^\]]*link="([^"]*)"[^\]]*\]([\s\S]*?)\[\/sf_button\]/gi,
    (_, link, label) =>
      `<p class="blog-cta"><a class="btn btn-primary" href="${link}">${label.trim()}</a></p>`,
  );

  html = html.replace(/\[spb_[^\]]+\]/g, '').replace(/\[\/spb_[^\]]+\]/g, '');
  html = html.replace(/\[sf_[^\]]+\]/g, '').replace(/\[\/sf_[^\]]+\]/g, '');
  html = html.replace(/\[vc_[^\]]+\]/g, '').replace(/\[\/vc_[^\]]+\]/g, '');

  return html.trim();
}

function parseItems(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
}

function main() {
  const xml = fs.readFileSync(xmlPath, 'utf8');
  const items = parseItems(xml);
  const attachments = new Map();

  for (const block of items) {
    if (cdata(block, 'wp:post_type') !== 'attachment') continue;
    const id = cdata(block, 'wp:post_id');
    const url = cdata(block, 'wp:attachment_url');
    if (id && url) attachments.set(id, url);
  }

  const posts = [];

  for (const block of items) {
    const type = cdata(block, 'wp:post_type');
    const status = cdata(block, 'wp:status');
    if (type !== 'post' || status !== 'publish') continue;

    const slug = cdata(block, 'wp:post_name');
    const title = cdata(block, 'title');
    const linkMatch = block.match(/<link>([^<]+)<\/link>/);
    const link = linkMatch ? linkMatch[1].trim() : '';
    const date = cdata(block, 'wp:post_date');
    const excerpt = cdata(block, 'excerpt:encoded');
    const contentRaw = cdata(block, 'content:encoded');
    const contentHtml = transformContent(contentRaw, attachments);

    const categories = [
      ...block.matchAll(
        /<category domain="category" nicename="([^"]+)"[^>]*><!\[CDATA\[([^\]]*)\]\]><\/category>/g,
      ),
    ].map((m) => ({ nicename: m[1], name: m[2] }));

    let featuredImage = '';
    for (const meta of block.matchAll(
      /<wp:postmeta>[\s\S]*?<wp:meta_key><!\[CDATA\[_thumbnail_id\]\]><\/wp:meta_key>[\s\S]*?<wp:meta_value><!\[CDATA\[(\d+)\]\]><\/wp:meta_value>[\s\S]*?<\/wp:postmeta>/g,
    )) {
      featuredImage = attachments.get(meta[1]) || '';
    }

    posts.push({
      slug,
      title,
      link,
      date,
      excerpt: excerpt || '',
      contentHtml,
      featuredImage,
      categories,
    });
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${posts.length} posts to ${outPath}`);
  for (const p of posts) {
    console.log(`  ${p.slug} (${p.contentHtml.length} chars)`);
  }
}

main();
