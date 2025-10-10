import { getPostData, getAllPostIds } from '@/lib/posts';
import Link from 'next/link';
import Toc from '@/components/Toc';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

// loosen param types to satisfy Next's generated PageProps typing
// Allow `any` here because Next's generated PageProps typing is incompatible with narrow types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any) {
  const { params } = props;
  const slug = (await params).slug;
  const postData = await getPostData(slug);
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
  const slug = (await params).slug;
  const postData = await getPostData(slug);

  return (
    <>
      <article className="max-w-4xl mx-auto slide-up">
        <header className="mb-8">
          <h1 className="font-bold text-openai-black dark:text-openai-white mb-4">{postData.title}</h1>
          <time className="text-openai-gray-500 dark:text-openai-gray-400 font-medium">
            {postData.date}
          </time>
        </header>

        <div className="flex flex-wrap gap-2 mb-8">
          {postData.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium bg-transparent border border-openai-gray-300 dark:border-openai-gray-600 text-openai-black dark:text-openai-white rounded-none hover:bg-openai-black hover:text-openai-white dark:hover:bg-openai-white dark:hover:text-openai-black transition-colors duration-300"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-openai-black prose-headings:dark:text-openai-white prose-p:text-openai-gray-700 prose-p:dark:text-openai-gray-200 prose-a:text-openai-blue prose-a:dark:text-openai-blue prose-code:text-openai-black prose-code:dark:text-openai-white prose-pre:bg-openai-gray-50 prose-pre:dark:bg-openai-gray-900"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml! }}
        />

        <div className="mt-12 pt-8 border-t border-openai-gray-200 dark:border-openai-gray-800">
          <Link
            href="/"
            className="inline-flex items-center text-openai-gray-600 dark:text-openai-gray-300 hover:text-openai-blue dark:hover:text-openai-blue transition-colors duration-300 font-medium"
          >
            ← Back to blog
          </Link>
        </div>
      </article>
      <Toc toc={postData.toc!} />
    </>
  );
}
