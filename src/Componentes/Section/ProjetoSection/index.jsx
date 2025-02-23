import Button from "../../Button";
import Carousel from "../../Carrousel";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, images, Link, Repositorio }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="
            flex flex-col lg:flex-row bg-zinc-900/60 overflow-hidden shadow-lg mb-4
            transition-all duration-300 hover:scale-105 w-full lg:w-[calc(89%+1rem)] gap-4 rounded-lg">
            <div className="w-full lg:w-64 p-4 flex flex-col justify-center bg-zinc-800/60 rounded-lg"> 
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-500">
                    {title}
                </h2>
                <p className="leading-relaxed text-sm sm:text-base text-gray-300 mb-6">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Button 
                        href={Link} 
                        primeiro={true} 
                        segundo={false} 
                        direcao={null} 
                        delay={null}
                    >
                        Visitar
                    </Button>
                    <Button 
                        href={Repositorio}
                        primeiro={false} 
                        segundo={true} 
                        direcao={null} 
                        delay={null}
                    >
                        Github
                    </Button>
                </div>
            </div>
            <div className="relative w-full lg:w-1/2 flex p-2">
                <Carousel images={images} />

                <motion.div
                    className="absolute m-0 top-0 right-0 bg-zinc-900 text-center shadow-lg overflow-hidden z-50 rounded-lg"
                    animate={{ width: isExpanded ? '105%' : '15%' }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ height: '100%', transformOrigin: "right center" }}
                >
                    <div className="flex items-center justify-center h-full w-full relative">
                        <a
                            className="absolute top-2 right-2 text-white cursor-pointer text-lg hover:text-green-400 duration-150"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? "✖️" : "➤"}
                        </a>

                        <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'} w-full p-4`}>
                            <h1 className="text-white text-xl font-bold mb-2">Descrição</h1>
                            <p className="text-gray-300">{description}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Card;