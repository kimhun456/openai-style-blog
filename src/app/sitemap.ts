import { getSortedPostsData, getAllTags } from '@/lib/posts';

export default function sitemap() {
  const siteUrl = 'https://example.com'; // Replace with your actual domain

  const allPosts = getSortedPostsData();
  const postEntries = allPosts.map((post) => ({
    url: `${siteUrl}/posts/${post.id}`,
    lastModified: new Date(post.date),
  }));

  const tags = getAllTags();
  const tagEntries = tags.map((tag) => ({
    url: `${siteUrl}/tags/${tag}`,
    lastModified: new Date(),
  }));

  const tagsUrl = {
    url: `${siteUrl}/tags`,
    lastModified: new Date(),
  };

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    tagsUrl,
    ...tagEntries,
    ...postEntries,
  ];
}
