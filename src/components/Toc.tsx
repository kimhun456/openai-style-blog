'use client';

import { useState, useEffect, useRef } from 'react';
import { TocEntry } from '@/lib/posts';

interface TocProps {
  toc: TocEntry[];
}

export default function Toc({ toc }: TocProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' } // Trigger when heading is 20% from the top
    );

    const elements = toc.map(({ id }) => document.getElementById(id)).filter(Boolean) as Element[];
    elements.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [toc]);

  if (!toc || toc.length === 0) {
    return null;
  }

  return (
    <nav className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 h-full pt-32 pr-8 w-64">
      <div className="sticky top-32">
        <h3 className="text-sm font-semibold text-openai-black dark:text-openai-white mb-4">On this page</h3>
        <ul className="space-y-2">
          {toc.map(({ id, level, text }) => (
            <li key={id} className={`${level === 3 ? 'ml-4' : ''}`}>
              <a
                href={`#${id}`}
                className={`block text-sm transition-colors duration-200 ${
                  activeId === id
                    ? 'text-openai-blue font-semibold'
                    : 'text-openai-gray-500 dark:text-openai-gray-400 hover:text-openai-black dark:hover:text-openai-white'
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
