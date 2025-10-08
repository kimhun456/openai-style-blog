const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4 px-8 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Code & Thought. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
