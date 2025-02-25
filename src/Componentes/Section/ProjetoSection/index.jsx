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

            </div>
        </div>
    );
}

export default Card;