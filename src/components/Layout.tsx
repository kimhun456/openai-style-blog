import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-openai-white dark:bg-openai-black text-openai-black dark:text-openai-white transition-colors duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
