import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../../Projetos.json";

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
    <div className="w-screen h-screen relative p-20 flex flex-col items-center justify-center">
      <div className="absolute inset-y-1/2 transform -translate-y-1/2 left-0 right-0 flex items-center justify-between px-4">
        <button onClick={prevProject} className="text-white p-2 text-2xl">❮</button>
        <button onClick={nextProject} className="text-white p-2 text-2xl">❯</button>
      </div>
      <div className="h-full flex items-center justify-center overflow-hidden w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentProject} 
            initial={{ opacity: 0, x: direction * 100 }} 
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex items-center w-full justify-center gap-8"
          >
            <img
              className="w-2/4 rounded-md hover:scale-105 transition-all duration-300"
              src={projects[currentProject].images[0]}
              alt="Projeto"
            />
            <div className="flex flex-col justify-center items-center w-2/4 text-center">
              <h2 className="text-xl font-semibold">{projects[currentProject].title}</h2>
              <p>{projects[currentProject].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectSlider;
