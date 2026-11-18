import { notFound } from 'next/navigation';
import BlogPostDetail from '@/components/BlogPostDetail';
import { getBlogPost, getBlogSlugs } from '@/lib/blog';

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: 'Blog' };
  }

  return {
    title: post.title,
    alternates: post.link ? { canonical: post.link } : undefined,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetail post={post} />;
}
