import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-openai-white dark:bg-openai-black border-b border-openai-gray-200 dark:border-openai-gray-800 py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-semibold text-openai-black dark:text-openai-white hover:text-openai-blue dark:hover:text-openai-blue transition-colors duration-300"
        >
          Code & Thought
        </Link>
        <nav className="flex items-center space-x-10">
          <Link
            href="/"
            className="text-lg font-medium text-openai-gray-700 dark:text-openai-gray-200 hover:text-openai-blue dark:hover:text-openai-blue transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/tags"
            className="text-lg font-medium text-openai-gray-700 dark:text-openai-gray-200 hover:text-openai-blue dark:hover:text-openai-blue transition-colors duration-300"
          >
            Tags
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
