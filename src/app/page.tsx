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
    <section>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title, summary, tags }) => (
          <li key={id} className="mb-8">
            <h2 className="text-2xl font-semibold">
              <Link href={`/posts/${id}`} className="hover:text-gray-400">
                {title}
              </Link>
            </h2>
            <small className="text-gray-500">{date}</small>
            <p className="mt-2">{summary}</p>
            <div className="mt-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-gray-600"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
