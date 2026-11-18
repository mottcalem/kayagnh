import posts from './blog-posts.json';

const postsBySlug = new Map(posts.map((post) => [post.slug, post]));

/** Published WordPress posts under /blogs/[slug] */
export function getBlogPost(slug) {
  return postsBySlug.get(slug) ?? null;
}

export function getBlogSlugs() {
  return posts.map((post) => post.slug);
}

export function getBlogPosts() {
  return posts;
}

/** Same order as the live /blogs index. Winter leads; newer posts are not date-sorted. */
const BLOG_LISTING_ORDER = [
  'london-autumn-winter-kings-cross-st-pancras',
  'easter-kings-cross-kaya-gnh',
  'afternoon-tea-in-london-britains-favourite-tradition',
  'things-to-do-london-spring-summer-2026',
];

/** English editorial posts for the /blogs index */
export function getBlogListingPosts() {
  const listing = posts.filter((post) => post.categories?.some((c) => c.nicename === 'blogs-en'));
  const bySlug = new Map(listing.map((post) => [post.slug, post]));
  const ordered = BLOG_LISTING_ORDER.map((slug) => bySlug.get(slug)).filter(Boolean);

  for (const post of listing) {
    if (!BLOG_LISTING_ORDER.includes(post.slug)) ordered.push(post);
  }

  return ordered;
}

export function blogPath(slug) {
  return `/blogs/${slug}`;
}
