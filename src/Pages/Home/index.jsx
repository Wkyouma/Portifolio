import { useState, useEffect } from 'react';
import { Element, Link } from 'react-scroll';
import { MdKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from 'framer-motion'; 
import Titulo from '../../Componentes/Titulo';
import Subtitulo from '../../Componentes/Subtitulo';
import Section from '../../Componentes/Section';
import TechIcons from '../../Componentes/TechIcons';
import Card from '../../Componentes/Section/ProjetoSection';
import ProjetoData from '../../Projetos.json';
import Formulario from '../../Componentes/Formulario';
import AboutSection from '../../Componentes/Section/AboutSection';
import Button from '../../Componentes/Button';
import retroOld from '/Galeria/city3.gif';
import cowboy from '/Galeria/city2.gif';
import retro from '/Galeria/city7.gif';
import ashita from '/Galeria/Ashita.gif';
import anime from '/Galeria/city5.gif';
import lain from '/Galeria/lain.gif';
import cyber from '/Galeria/Cyber.gif';
import Squares from '../../Componentes/Formulario/Squares/Squares';

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
    const [isScrolled, setIsScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 500) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            className="relative z-0 bg-gradient-to-t from-zinc-900 to-black"
        >
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
                        <div className="absolute bottom-2 right-2 z-50 flex space-x-4">
                            <button onClick={handlePreviousBackground} className="text-white text-3xl"><MdKeyboardDoubleArrowLeft size={50}/></button>
                            <h1 className='flex items-center font-mono text-3xl '>{background.name}</h1>
                            <button onClick={handleNextBackground} className="text-white text-3xl"><MdOutlineKeyboardDoubleArrowRight size={50}/></button>
                        </div>
                        <div style={{ marginTop: '4rem' }}></div>
                        <Titulo className="text-3xl sm:text-4xl">Igor <span className='text-green-300'>Terplak</span></Titulo>
                        <Subtitulo className="text-lg sm:text-xl md:text-2xl">Desenvolvedor Front-end | Designer Criativo</Subtitulo>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
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
                        <h1 className="absolute bottom-0 left-0 mb-4 ml-4 font-mono text-3xl sm:text-4xl text-white z-10 hidden sm:block hover:text-green-400  duration-150">WELCOME</h1>
                    </div>
                </div>
            </Element>         
            <TechIcons />
            <Element id='Sobre'>
                <span className='text-white text-xs sm:text-5xl'>___________________________________________________________</span>
                <AboutSection  />
            </Element>
            <Section id="projetos">
                <Titulo>Projetos Recentes</Titulo>
                <div className='grid gap-5 m-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {ProjetoData.map((Projeto, index) => (
                        <Card 
                            key={index} 
                            title={Projeto.title} 
                            description={Projeto.description} 
                            link={Projeto.link} 
                            repositorio={Projeto.repositorio} 
                            images={Projeto.images} 
                        />
                    ))}
                </div>
            </Section>
            <Section id="contato">
                <div className="relative w-full h-screen">
                    <Squares
                        speed={0.5}
                        squareSize={40}
                        borderColor="#586359"
                        hoverFillColor="#222"
                    />
                    <Formulario />               
                </div>
            </Section>
        </motion.div>
    );
}

export default Home;