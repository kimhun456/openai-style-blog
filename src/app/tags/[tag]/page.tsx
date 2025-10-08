import Link from 'next/link';
import { getAllTags, getPostsByTag } from '@/lib/posts';

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag }));
}

// Allow `any` here because Next's generated PageProps typing is incompatible with narrow types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any) {
  const { params } = props;
  const tag = params.tag;
  return {
    title: `Posts with tag: ${tag}`,
    description: `Browse all blog posts tagged with ${tag}.`,
    openGraph: {
      title: `Posts with tag: ${tag}`,
      description: `Browse all blog posts tagged with ${tag}.`,
      type: 'website',
    },
  };
}

// Allow `any` here because Next's generated PageProps typing is incompatible with narrow types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function TagDetail(props: any) {
  const { params } = props;
  const tag = params.tag;
  const posts = getPostsByTag(tag);

  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-16 slide-up">
        <h1 className="font-bold text-openai-black dark:text-openai-white mb-4">Posts tagged with #{tag}</h1>
        <p className="text-xl text-openai-gray-600 dark:text-openai-gray-300">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
        </p>
      </div>

      <div className="space-y-12">
        {posts.map(({ id, date, title, summary, tags }, index) => (
          <article
            key={id}
            className="slide-up pb-12 border-b border-openai-gray-200 dark:border-openai-gray-800 last:border-b-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <header className="mb-6">
              <h2 className="font-semibold mb-3">
                <Link
                  href={`/posts/${id}`}
                  className="text-openai-black dark:text-openai-white hover:text-openai-blue dark:hover:text-openai-blue transition-colors duration-300"
                >
                  {title}
                </Link>
              </h2>
              <time className="text-openai-gray-500 dark:text-openai-gray-400 text-sm font-medium">
                {date}
              </time>
            </header>

            <p className="text-openai-gray-700 dark:text-openai-gray-200 mb-4 leading-relaxed">
              {summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((t) => (
                <Link
                  key={t}
                  href={`/tags/${t}`}
                  className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium bg-transparent border border-openai-gray-300 dark:border-openai-gray-600 text-openai-black dark:text-openai-white rounded-none hover:bg-openai-black hover:text-openai-white dark:hover:bg-openai-white dark:hover:text-openai-black transition-colors duration-300"
                >
                  #{t}
                </Link>
              ))}
            </div>

            <Link
              href={`/posts/${id}`}
              className="inline-flex items-center text-openai-blue hover:text-openai-black dark:hover:text-openai-gray-200 transition-colors duration-300 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-openai-gray-200 dark:border-openai-gray-800">
        <Link
          href="/tags"
          className="inline-flex items-center text-openai-gray-600 dark:text-openai-gray-300 hover:text-openai-blue dark:hover:text-openai-blue transition-colors duration-300 font-medium"
        >
          ← Back to all tags
        </Link>
      </div>
    </section>
  );
}
