import Link from 'next/link';

/** The page title is already the single <h1>; demote any h1 inside the imported body to h2. */
function demoteBodyHeadings(html = '') {
  return html.replace(/<h1(\s[^>]*)?>/gi, '<h2$1>').replace(/<\/h1>/gi, '</h2>');
}

export default function BlogPostDetail({ post }) {
  const bodyHtml = demoteBodyHeadings(post.contentHtml);

  return (
    <article className="blog-post-detail">
      <div className="container blog-post-detail-inner">
        <header className="blog-post-detail-header">
          <Link href="/local-guide" className="blog-post-detail-back">
            ← Local Guide
          </Link>
          <h1 className="blog-post-detail-title">{post.title}</h1>
        </header>
        {post.featuredImage ? (
          <figure className="blog-post-detail-hero">
            <img src={post.featuredImage} alt="" loading="eager" decoding="async" />
          </figure>
        ) : null}
        <div
          className="blog-post-body wp-content"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </div>
    </article>
  );
}
