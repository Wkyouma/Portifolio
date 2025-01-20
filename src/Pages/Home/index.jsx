import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Titulo from '../../Componentes/Titulo';
import Subtitulo from '../../Componentes/Subtitulo';
import Section from '../../Componentes/Section';
import TechIcons from '../../Componentes/TechIcons';
import Card from '../../Componentes/CardSection';

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
        <div className="relative z-0 bg-gradient-to-t from-zinc-900 to-black">
            <Element name='Home'>
                <div 
                    className={`h-[100vh] bg-cover bg-center relative transition-colors duration-300`}
                    style={{ 
                        backgroundImage: background,
                        backgroundAttachment: 'fixed',
                    }}
                >
                     <div className="h-screen inset-0 bg-gradient-to-b from-transparent to-black/90 z-50"></div>
                    <div className="absolute inset-0 m-2 max-h-svh flex justify-center items-center flex-col text-center z-10 border">
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
                        <h1 className="absolute bottom-0 left-0 mb-4 ml-4 font-mono text-4xl text-white z-10">WELCOME</h1>
                    </div>
                </div>
            </Element>
           <TechIcons></TechIcons>
            <Section id="Habilidades">
            </Section>

            <Section id="projetos">
            <Titulo>Projetos Recentes</Titulo>
            <div className='m-5'>
                <Card>Titulo</Card>
            </div>
          
              {/* Projetos */}
            </Section>
        </div>
    );
}
export default Home;