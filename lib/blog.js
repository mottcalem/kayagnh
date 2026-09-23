import posts from './blog-posts.json';

const postsBySlug = new Map(posts.map((post) => [post.slug, post]));

/** Published WordPress posts under /blogs-en/[slug] */
export function getBlogPost(slug) {
  return postsBySlug.get(slug) ?? null;
}

export function getBlogSlugs() {
  return posts.map((post) => post.slug);
}

export function getBlogPosts() {
  return posts;
}

/** English editorial posts for the /blogs-en index */
export function getBlogListingPosts() {
  return posts.filter((post) => post.categories?.some((c) => c.nicename === 'blogs-en'));
}

export function blogPath(slug) {
  return `/blogs-en/${slug}`;
}
