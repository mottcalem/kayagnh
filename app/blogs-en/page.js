import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { blogPath, getBlogListingPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog',
  description: 'Stories, guides and seasonal inspiration from Kaya Great Northern Hotel, King’s Cross.',
};

function formatPostDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr.replace(' ', 'T'));
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function excerptFromHtml(html) {
  const text = html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= 180) return text;
  return `${text.slice(0, 177).trim()}…`;
}

export default function BlogIndexPage() {
  const posts = getBlogListingPosts();

  return (
    <>
      <PageHero
        image="/img/basic/gnh-hero-exterior-1600_3.webp"
        tag="Blog"
        title="All Blogs"
        description="Guides, seasons and stories from the heart of King’s Cross."
      />

      <section className="section blog-index-section" aria-label="Blog posts">
        <div className="container">
          <ul className="blog-index-list">
            {posts.map((post) => (
              <li key={post.slug} className="blog-index-item reveal">
                <Link href={blogPath(post.slug)} className="blog-index-card">
                  <time className="blog-index-date" dateTime={post.date}>
                    {formatPostDate(post.date)}
                  </time>
                  <h2 className="blog-index-title">{post.title}</h2>
                  <p className="blog-index-excerpt">{excerptFromHtml(post.contentHtml)}</p>
                  <span className="blog-index-cta">Read More &rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
