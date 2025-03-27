import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Portfolio</h1>
          
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open menu</span>
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 absolute md:relative left-0 md:left-auto w-full md:w-auto bg-white dark:bg-gray-900 p-4 md:p-0 mt-16 md:mt-0 shadow-lg md:shadow-none">
              <li><a href="#home" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Sobre</a></li>
              <li><a href="#projects" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Projetos</a></li>
              <li><a href="#skills" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Habilidades</a></li>
              <li><a href="#contact" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 