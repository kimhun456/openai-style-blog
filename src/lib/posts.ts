import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { visit } from 'unist-util-visit';
import { Root, Element } from 'hast';

const postsDirectory = path.join(process.cwd(), '_posts');

export interface TocEntry {
  level: number;
  text: string;
  id: string;
}

export interface PostData {
  id: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  contentHtml?: string;
  toc?: TocEntry[];
}

// Custom plugin to extract TOC
const rehypeTocExtract = () => {
  return (tree: Root, file: any) => {
    const toc: TocEntry[] = [];
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'h2' || node.tagName === 'h3') {
        const id = node.properties?.id as string;
        // Extract text content from the heading node
        let text = '';
        visit(node, 'text', (textNode) => {
          text += textNode.value;
        });
        if (id && text) {
          toc.push({
            level: node.tagName === 'h2' ? 2 : 3,
            text,
            id,
          });
        }
      }
    });
    file.data.toc = toc;
  };
};


export function getSortedPostsData(): Omit<PostData, 'contentHtml'>[] {
  // Get file names under /_posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      summary: matterResult.data.summary,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeTocExtract)
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();
  const toc = (processedContent.data as any).toc || [];

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    toc,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: matterResult.data.tags,
    summary: matterResult.data.summary,
  };
}

export function getAllTags(): string[] {
  const postsData = getSortedPostsData();
  const allTags = postsData.flatMap((post) => post.tags);
  return Array.from(new Set(allTags.sort()));
}

export function getPostsByTag(tag: string): Omit<PostData, 'contentHtml'>[] {
  const postsData = getSortedPostsData();
  return postsData.filter((post) => post.tags.includes(tag));
}
