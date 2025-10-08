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
export default function TagDetail(props: any) {
  const { params } = props;
  const tag = params.tag;
  const posts = getPostsByTag(tag);

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Posts tagged with #{tag}</h1>
      <ul>
        {posts.map(({ id, date, title, summary, tags }) => (
          <li key={id} className="mb-8">
            <h2 className="text-2xl font-semibold">
              <Link href={`/posts/${id}`} className="hover:text-gray-400">
                {title}
              </Link>
            </h2>
            <small className="text-gray-500">{date}</small>
            <p className="mt-2">{summary}</p>
            <div className="mt-2">
              {tags.map((t) => (
                <Link
                  key={t}
                  href={`/tags/${t}`}
                  className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-gray-600"
                >
                  #{t}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <Link href="/tags" className="text-blue-400 hover:text-blue-300">
        ← Back to all tags
      </Link>
    </section>
  );
}
