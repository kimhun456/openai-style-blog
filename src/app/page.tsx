import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/posts';

export async function generateMetadata() {
  return {
    title: 'Code & Thought',
    description: 'Personal tech blog featuring code, thoughts, and insights.',
    openGraph: {
      title: 'Code & Thought',
      description: 'Personal tech blog featuring code, thoughts, and insights.',
      type: 'website',
      url: '/',
    },
  };
}

export default function Home() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-16 slide-up">
        <h1 className="font-bold text-openai-black dark:text-openai-white mb-4">Blog</h1>
        <p className="text-xl text-openai-gray-600 dark:text-openai-gray-300 max-w-2xl mx-auto">
          Thoughts on code, technology, and life. Sharing insights and experiences from the world of software development.
        </p>
      </div>

      <div className="space-y-12">
        {allPostsData.map(({ id, date, title, summary, tags }, index) => (
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
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium bg-transparent border border-openai-gray-300 dark:border-openai-gray-600 text-openai-black dark:text-openai-white rounded-none hover:bg-openai-black hover:text-openai-white dark:hover:bg-openai-white dark:hover:text-openai-black transition-colors duration-300"
                >
                  #{tag}
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
    </section>
  );
}
