import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../../Projetos.json";
import Tag from './Tag/index'
import TituloV2 from "../../Titulo/TituloV2";

const ProjectSlider = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full h-full relative flex flex-col p-4 md:p-8">
      <TituloV2>Projetos</TituloV2>
      

      <div className="absolute inset-y-1/2 transform -translate-y-1/2 left-0 right-0 flex items-center justify-between px-2 md:px-4">
        <button
          onClick={prevProject}
          className="text-white p-2 md:p-4 text-xl md:text-3xl rounded-full transition-all hover:text-green-500 z-10"
        >
          ❮
        </button>
        <button
          onClick={nextProject}
          className="text-white p-2 md:p-4 text-xl md:text-3xl rounded-full transition-all hover:text-green-500 z-10"
        >
          ❯
        </button>
      </div>
   
      <div className="min-h-[500px] flex items-center justify-center p-4 md:p-12 w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }} 
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row items-center w-full justify-center gap-4 md:gap-8"
          >
            <img
              className="w-full lg:w-2/4 rounded-xl object-cover border border-green-500
              hover:shadow-[0_15px_40px_rgba(34,197,94,0.2)] transition-all duration-300"
              src={projects[currentProject].images[0]}
              alt={projects[currentProject].title}
            />
            <div className="flex flex-col font-mono items-center lg:items-start w-full lg:w-2/4 space-y-3 md:space-y-4 mt-4 lg:mt-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-500">{projects[currentProject].title}</h2>
              <p className="text-base md:text-lg text-gray-300 text-center lg:text-left">{projects[currentProject].description}</p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-xs sm:max-w-none">
                <a
                  href={projects[currentProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 md:px-6 py-2 text-base md:text-lg font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all text-center"
                >
                  Acessar Projeto
                </a>
                <a
                  href={projects[currentProject].Repositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 md:px-6 py-2 text-base md:text-lg font-semibold bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all text-center"
                >
                  Ver Repositório
                </a>
              </div>
              
              <div className="w-full">
                <Tag projeto={projects[currentProject]} />
              </div>
            </div>
          </motion.div> 
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectSlider;
