import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Olá, eu sou <span className="text-blue-600 dark:text-blue-400">Seu Nome</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Desenvolvedor Full Stack
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Transformando ideias em experiências digitais incríveis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center"
              >
                Entre em Contato
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 text-center"
              >
                Ver Projetos
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 