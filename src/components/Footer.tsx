const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-openai-gray-600 dark:text-openai-gray-400 border-t border-openai-gray-200 dark:border-openai-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Code & Thought. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-openai-gray-500 dark:text-openai-gray-300 hover:text-openai-blue dark:hover:text-openai-blue transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
