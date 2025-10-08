import { getPostData, getAllPostIds } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

// loosen param types to satisfy Next's generated PageProps typing
// Allow `any` here because Next's generated PageProps typing is incompatible with narrow types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any) {
  const { params } = props;
  const postData = await getPostData(params.slug);
  return {
    title: postData.title,
    description: postData.summary,
    openGraph: {
      title: postData.title,
      description: postData.summary,
      type: 'article',
      publishedTime: new Date(postData.date).toISOString(),
      tags: postData.tags,
    },
  };
}

// Allow `any` here because Next's generated PageProps typing is incompatible with narrow types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Post(props: any) {
  const { params } = props;
  const postData = await getPostData(params.slug);

  return (
    <article>
      <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
      <div className="text-gray-500 mb-4">{postData.date}</div>
      <div className="flex flex-wrap mb-8">
        {postData.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-gray-600"
          >
            #{tag}
          </Link>
        ))}
      </div>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml! }}
      />
    </article>
  );
}
