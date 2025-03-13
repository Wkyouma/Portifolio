import React from "react";

const Tag = ({ projeto }) => {

    if(!projeto || !projeto.tecnologias){
        return <div>Em Breve</div>
    }

  return (
    <div className="flex mt-10 flex-wrap gap-2">
      {projeto.tecnologias.map((tec, idx) => (
        <span key={idx} className="bg-zinc-700/50 p-2 m-1 rounded-xl min-w-32 hover:bg-zinc-500 transition-all duration-200 hover:cursor-default text-stone-100">
          {tec}
        </span>
      ))}
    </div>
  );
};

export default Tag;
