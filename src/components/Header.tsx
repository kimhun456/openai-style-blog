import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Code & Thought
        </Link>
        <nav>
          <Link href="/" className="mr-4 hover:text-gray-400">
            Home
          </Link>
          <Link href="/tags" className="hover:text-gray-400">
            Tags
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
