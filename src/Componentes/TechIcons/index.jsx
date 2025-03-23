import React from 'react';
import { FaReact, FaJs, FaPython, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import Subtitulo from '../Titulo/Subtitulo';

const TechIcons = () => {
    const technologies = [
        { 
            Icon: FaReact, 
            name: 'React',
        },
        { 
            Icon: RiTailwindCssFill, 
            name: 'Tailwind',
        },
        { 
            Icon: FaJs, 
            name: 'JavaScript',
        },
        { 
            Icon: SiTypescript, 
            name: 'TypeScript',
        },
        { 
            Icon: FaPython, 
            name: 'Python',
        },
        { 
            Icon: FaNodeJs, 
            name: 'Node.js',
        },
    ];

    return (
        <div className="w-full py-12 ">
            <div className="container mx-auto px-4">
                <Subtitulo>Habilidades</Subtitulo>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
                    {technologies.map((tech) => (
                        <div 
                            key={tech.name} 
                            className={`
                                flex-col text-green-500 rounded-xl
                                relative group w-20 h-20 
                                flex items-center justify-center 
                                transition-all duration-600 ease-in-out
                                transform hover:scale-110
                                hover:border border-green-500 p-1
                                shadow-md hover:shadow-xl
                            `}
                        >
                            <tech.Icon 
                                size={50} 
                                className={`
                                    text-green-500
                                    transition-transform duration-300 
                                    group-hover:rotate-6
                                `}
                                aria-label={tech.name} 
                            />
                            <a>{tech.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechIcons;