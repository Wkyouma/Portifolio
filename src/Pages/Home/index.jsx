import { useState, useEffect } from 'react';
import { Element, Link } from 'react-scroll';
import { MdKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from 'framer-motion'; 
import Titulo from '../../Componentes/Titulo';
import Subtitulo from '../../Componentes/Titulo/Subtitulo';
import Section from '../../Componentes/Section';
import TechIcons from '../../Componentes/TechIcons';
import AboutSection from '../../Componentes/Section/AboutSection';
import Button from '../../Componentes/Button';
import retroOld from '/Galeria/FM9Y.gif';
import cowboy from '/Galeria/as.gif';
import retro from '/Galeria/retro.gif';
import ashita from '/Galeria/Ashita.gif';
import anime from '/Galeria/anime.gif';
import lain from '/Galeria/lain.gif';
import cyber from '/Galeria/28vB.gif';
import ProjectSlider from '../../Componentes/Section/Projetos';
import FormSection from '../../Componentes/FormSection';
import Cript from '../../Componentes/Titulo/Cript';

const backgrounds = [
   {name :"Screen-00", url: `url(${ashita})`},
   {name :"Screen-01", url:`url(${lain})`},
   {name :"Screen-02", url:`url(${cyber})`},
   {name :"Screen-03", url:`url(${anime})`},
   {name :"Screen-04", url:`url(${retro})`},
   {name :"Screen-05", url:`url(${cowboy})`},
   {name :"Screen-06", url:`url(${retroOld})`},
];

const Home = () => {
    const [background, setBackground] = useState(backgrounds[0]);

    const handleNextBackground = () => {
        const currentIndex = backgrounds.indexOf(background);
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        setBackground(backgrounds[nextIndex]);
    };

    const handlePreviousBackground = () => {
        const currentIndex = backgrounds.indexOf(background);
        const prevIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
        setBackground(backgrounds[prevIndex]);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-0 bg-gradient-to-b from-stone-900 to-black">
            <Element name='Home'>
                <div 
                    className={`h-[100vh] sm:h-auto bg-cover bg-center relative transition-colors duration-300`}
                    style={{ 
                        backgroundImage: background.url,
                        backgroundAttachment: 'fixed', 
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="h-screen inset-0 bg-green-950/20 z-50"></div>
                    <div className="absolute inset-0 m-2 max-h-svh flex justify-center items-center flex-col text-center z-10 border">
                        <div className="absolute bottom-2 right-2 z-50 flex space-x-2 md:space-x-4">
                            <button onClick={handlePreviousBackground} className="text-white text-xl md:text-3xl hover:text-green-400"><MdKeyboardDoubleArrowLeft className="w-8 h-8 md:w-12 md:h-12"/></button>
                            <h1 className='flex items-center font-mono text-lg md:text-3xl'>{background.name}</h1>
                            <button onClick={handleNextBackground} className="text-white text-xl md:text-3xl hover:text-green-400"><MdOutlineKeyboardDoubleArrowRight className="w-8 h-8 md:w-12 md:h-12"/></button>
                        </div>
                        <div className="mt-16 md:mt-24"></div>
                        <Titulo className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Igor <span className='text-green-300'>Terplak</span></Titulo>
                        <Subtitulo className="text-base sm:text-xs md:text-xl lg:text-2xl px-4">Desenvolvedor Front-end | Designer Criativo</Subtitulo>
                        <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <Link 
                                    to="projetos" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true}
                                >
                                    <Button primeiro={true} segundo={false}>
                                        Ver Projetos
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Button href='https://github.com/Wkyouma' primeiro={false} segundo={true}>
                                    Github
                                </Button>
                            </motion.div>
                        </div>
                        <div className='font-mono absolute top-1/2 right-0 transform translate-y-[-50%] hidden sm:block'>
                            <div className='flex flex-col text-3xl sm:text-4xl mr-3 border-t-2 border-b-2'> 
                                <span>0</span>
                                <span>0</span>
                                <span>{backgrounds.indexOf(background)}</span>
                            </div>
                        </div>
                        <Cript text={"Welcome"}></Cript>
                    </div>
                </div>
            </Element>         


            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.30 }}
                transition={{ duration: 0.5 }}
            >
                <TechIcons />
            </motion.div>

            <Element id='Sobre'>
               
                    <AboutSection />
           
            </Element>

            <Section id="projetos">
      
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <ProjectSlider />
                </motion.div>
            </Section>

            <Section id="contato">
        
                    <FormSection />

            </Section>
        </motion.div>
    );
}

export default Home;
