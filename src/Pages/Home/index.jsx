import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Titulo from '../../Componentes/Titulo';
import Subtitulo from '../../Componentes/Subtitulo';
import Section from '../../Componentes/Section';
import Card from '../../Componentes/Card';

const backgrounds = [
    'url(./Galeria/retro-old.gif)',
    'url(./Galeria/cowboy.gif)',
    'url(./Galeria/retro.gif)',
    'url(./Galeria/Ashita.gif)',
    'url(./Galeria/anime.gif)',
    'url(./Galeria/lain.gif)',
    'url(./Galeria/Cyber.gif)',
    'url(./Galeria/as.gif)',
];

const Home = () => {
    const [background, setBackground] = useState(backgrounds[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * backgrounds.length);
            setBackground(backgrounds[randomIndex]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-0">
            <div 
                className="h-screen bg-cover bg-center relative" 
                style={{ 
                    backgroundImage: background,
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-green-900 opacity-30 z-0"></div>
                <div className="absolute inset-0 flex justify-center items-center flex-col text-center p-4 z-10">
                    <Titulo>Igor <span className='text-green-300'>Terplak</span></Titulo>
                    <Subtitulo className="text-lg md:text-2xl">Desenvolvedor Front-end | Designer Criativo</Subtitulo>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                        <motion.button
                         initial={{ opacity: 0, x: -100 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{
                             duration: 0.3,
                             ease: "circIn",
                             delay: 0.5
                         }}
                            href="#projetos" 
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300 z-20"
                        >
                            Ver Projetos
                        </motion.button>
                        <motion.button
                         initial={{ opacity: 0, x: 100 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{
                             duration: 0.3,
                             ease: "backInOut",
                             delay: 0.5
                         }}
                            href="#contato" 
                            className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 z-20"
                        >
                            Contato
                        </motion.button>
                    </div>
                </div>
            </div>
            <Section className="relative z-10">
            
               
                <div className="w-full mx-auto px-4 text-center">
                   
                    <div className="mt-5 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <Card><Subtitulo>Frontend</Subtitulo><p>React, Vue, Tailwind</p></Card>
                        <Card><Subtitulo>Backend</Subtitulo><p>Node.js, Express, MongoDB</p></Card>
                        <Card><Subtitulo>Design</Subtitulo><p>Figma, Adobe XD</p></Card>
                        <Card><Subtitulo>DevOps</Subtitulo><p>Docker, CI/CD</p></Card>  
                    </div>
                </div>
            </Section>
            <Section>
                <Titulo>Projetos Recentes</Titulo>
                
            </Section>
        </div>
    );
}

export default Home;