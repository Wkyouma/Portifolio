import React from "react";

const Tag = ({ projeto }) => {


  return (
    <div className="flex mt-10 flex-wrap gap-2">
      {projeto.tecnologias.map((tec, idx) => (
        <span key={idx} className=" p-2 m-1 border-t-2 bg-stone-700/30 border-green-400  min-w-32 hover:bg-zinc-500 transition-all duration-200 hover:cursor-default text-stone-100">
          {tec}
        </span>
      ))}
    </div>
  );
};

export default Tag;
