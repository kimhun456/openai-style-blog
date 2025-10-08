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
    <section>
      <h1 className="text-4xl font-bold mb-8">All Tags</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allTags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="block p-4 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
          >
            <h2 className="text-lg font-semibold capitalize">#{tag}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
