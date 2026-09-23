import Link from 'next/link';

export default function BlogPostDetail({ post }) {
  const usesPanelLayout = post.contentHtml?.includes('blog-panel');

  return (
    <article className="blog-post-detail">
      <div className="container blog-post-detail-inner">
        <header className="blog-post-detail-header">
          <Link href="/local-guide" className="blog-post-detail-back">
            ← Local Guide
          </Link>
          <h1 className="blog-post-detail-title">{post.title}</h1>
        </header>
        {post.featuredImage && !usesPanelLayout ? (
          <figure className="blog-post-detail-hero">
            <img src={post.featuredImage} alt="" loading="eager" decoding="async" />
          </figure>
        ) : null}
        <div
          className="blog-post-body wp-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
