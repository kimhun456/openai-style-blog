import Link from 'next/link';
import { getAllTags } from '@/lib/posts';

export async function generateMetadata() {
  return {
    title: 'All Tags',
    description: 'Browse all tags used in the blog posts.',
  };
}

export default function Tags() {
  const allTags = getAllTags();

  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-16 slide-up">
        <h1 className="font-bold text-openai-black dark:text-openai-white mb-4">All Tags</h1>
        <p className="text-xl text-openai-gray-600 dark:text-openai-gray-300">
          Explore posts organized by topics and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTags.map((tag, index) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="slide-up p-6 border border-openai-gray-200 dark:border-openai-gray-700 rounded-none hover:border-openai-blue dark:hover:border-openai-blue hover:bg-openai-gray-50 dark:hover:bg-openai-gray-900 transition-all duration-300 group"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <h2 className="text-xl font-semibold text-openai-black dark:text-openai-white group-hover:text-openai-blue dark:group-hover:text-openai-blue transition-colors duration-300 capitalize">
              #{tag}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
