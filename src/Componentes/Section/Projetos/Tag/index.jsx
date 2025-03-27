import React from "react";

const Tag = ({ projeto }) => {
  return (
    <div className="flex mt-4 md:mt-6 flex-wrap gap-2 justify-center lg:justify-start">
      {projeto.tecnologias.map((tec, idx) => (
        <span 
          key={idx} 
          className="p-1.5 md:p-2 border-t-2 bg-stone-700/30 border-green-400 
            text-sm md:text-base min-w-[80px] md:min-w-[100px] text-center
            hover:bg-zinc-500 transition-all duration-200 hover:cursor-default 
            text-stone-100"
        >
          {tec}
        </span>
      ))}
    </div>
  );
};

export default Tag;
