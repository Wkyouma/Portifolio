import React from 'react';
import { FaReact, FaJs, FaPython, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import Subtitulo from '../Subtitulo';

const TechIcons = () => {
    const technologies = [
        { 
            Icon: FaReact, 
            color: 'text-green-500', 
            bgHover: 'hover:bg-green-100',
            name: 'React',
        },
        { 
            Icon: RiTailwindCssFill, 
            color: 'text-green-600', 
            bgHover: 'hover:bg-green-100',
            name: 'Tailwind',
        },
        { 
            Icon: FaJs, 
            color: 'text-green-500', 
            bgHover: 'hover:bg-green-100',
            name: 'JavaScript',
        },
        { 
            Icon: SiTypescript, 
            color: 'text-green-600', 
            bgHover: 'hover:bg-green-100',
            name: 'TypeScript',
        },
        { 
            Icon: FaPython, 
            color: 'text-green-700', 
            bgHover: 'hover:bg-green-100',
            name: 'Python',
        },
        { 
            Icon: FaNodeJs, 
            color: 'text-green-600', 
            bgHover: 'hover:bg-green-100',
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
                                flex-col text-green-500
                                relative group w-20 h-20 rounded-xl 
                                flex items-center justify-center 
                                transition-all duration-300 ease-in-out
                                transform hover:scale-110
                                ${tech.bgHover}
                                cursor-pointer
                                shadow-md hover:shadow-xl
                            `}
                        >
                            <tech.Icon 
                                size={50} 
                                className={`
                                    ${tech.color} 
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