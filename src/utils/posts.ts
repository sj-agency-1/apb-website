import { getCollection } from 'astro:content';

export interface BlogItemForSidebar {
  title: string;
  href: string;
  image: string;
}

export async function getLatestBlogPosts(lang: 'en' | 'ru', count: number = 2): Promise<BlogItemForSidebar[]> {
  const allPosts = await getCollection('blog', (entry) => {
    const [entryLang] = entry.id.split('/');
    return entryLang === lang && !entry.data.isArchive;
  });

  const sortedPosts = allPosts
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .slice(0, count);

  return sortedPosts.map((post) => {
    const parts = post.id.split('/');
    parts.shift(); // Remove language prefix
    const slug = parts.join('/').replace(/\.mdx?$/, '');

    return {
      title: post.data.excerptTitle || post.data.title,
      href: `/${lang}/blog/${slug}`,
      image: post.data.heroImage,
    };
  });
}

export async function getLatestAdvantagesPosts(lang: 'en' | 'ru', count: number = 3): Promise<BlogItemForSidebar[]> {
  const allPosts = await getCollection('advantages', (entry) => {
    const [entryLang] = entry.id.split('/');
    return entryLang === lang && !entry.data.isArchive;
  });

  const sortedPosts = allPosts
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .slice(0, count);

  return sortedPosts.map((post) => {
    const parts = post.id.split('/');
    parts.shift();
    const slug = parts.join('/').replace(/\.mdx?$/, '');

    return {
      title: post.data.excerptTitle || post.data.title,
      href: `/${lang}/advantages/${slug}`,
      image: post.data.heroImage,
    };
  });
}
