import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../../Projetos.json";
import Tag from './Tag/index'

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
    <div className="w-full h-full relative flex flex-col items-center justify-center p-8">
      <div className="absolute inset-y-1/2 transform -translate-y-1/2 left-0 right-0 flex items-center justify-between px-4">
        <button
          onClick={prevProject}
          className="text-white p-4 text-3xl ml-5 rounded-full transition-all hover:text-green-500"
        >
          ❮
        </button>
        <button
          onClick={nextProject}
          className="text-white p-4 text-3xl mr-5 rounded-full transition-all hover:text-green-500"
        >
          ❯
        </button>
      </div>

      <div className="bg-zinc-800/50 h-[500px] flex items-center justify-center p-12 w-full shadow-lg shadow-zinc-900">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }} 
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center w-full justify-center gap-8"
          >
            <img
              className="w-2/4 rounded-xl min-h-96 border border-green-500
              hover:shadow-[0_15px_40px_rgba(34,197,94,0.2)] transition-all duration-300"
              src={projects[currentProject].images[0]}
              alt="Projeto"
            />
            
            <div className="flex flex-col items-center w-2/4 space-y-4">
              <h2 className="text-3xl font-semibold text-green-500">{projects[currentProject].title}</h2>
              <p className="text-lg text-gray-300">{projects[currentProject].description}</p>
              <a
                href={projects[currentProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 text-lg font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                Acessar Projeto
              </a>
              <a
                href={projects[currentProject].Repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-2 text-lg font-semibold bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
              >
                Ver Repositório
              </a>
              <div className=" flex w-full">
                <Tag projeto={projects[currentProject]}></Tag>
              </div>
            </div>
          </motion.div> 
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectSlider;
