import TituloV2 from "../../Titulo/TituloV2";
import CardObjetivo from "./CardObjetivo";
import Section from "../../Section/index";
import { motion } from 'framer-motion';
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaSteam, FaFilm , FaSpotify } from 'react-icons/fa';
import { HiDocumentCheck } from "react-icons/hi2";
import teste from '/Galeria/cowboy.gif'

const AboutSection = () => {
    const [profissional, setProfissional] = useState(true);
    const toggleContent = () => {
        setProfissional(prev => !prev); 
    };

    return (
        <Section id="about">
            <div className="w-full relative">
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed opacity-30 z-0"
                   
                />
                
            
                <div className="relative z-10">
              
                     <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5 }}
                                    >
                    <TituloV2>Sobre mim</TituloV2>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="container max-w-7xl mx-auto px-4 py-16 relative"
                    >
                    

                        <motion.div 
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            className="border-t-2 border-green-400 p-4 sm:p-8 md:p-12 bg-neutral-900 mb-20"
                        >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={toggleContent}
                                    className="mb-4 md:mb-6 inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-md bg-green-600 text-white font-mono text-sm md:text-base border border-green-500/30 hover:bg-green-700 transition-all duration-300 group"
                                >
                                    <span className="relative flex items-center gap-2">
                                        {profissional ? "Mostrar conteúdo pessoal" : "Mostrar conteúdo profissional"}
                                    </span>
                                </motion.button>
                            <div className="flex flex-col lg:flex-row  gap-12">
                                <motion.div 
                                    className="lg:w-1/3 flex justify-center "
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="relative group">
                                      
                                        <img 
                                            src="./Galeria/euzinho.png" 
                                            className="relative h-48 w-48 md:h-64 md:w-64 rounded-lg object-cover transition-all duration-300 group-hover:scale-105" 
                                            alt="Igor Gutierrez" 
                                        />
                                    </div>
                                </motion.div>

                                <div className="lg:w-2/3 space-y-4 md:space-y-8 text-center lg:text-left">
                                    {profissional ? (
                                        <>
                                          <motion.div 
                                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ staggerChildren: 0.2 }}
                                            >
                                                <motion.div whileHover={{ scale: 1.05, rotate: -2 }}>
                                                    <CardObjetivo Title="Desenvolvimento Web" description="Frontend & Backend" />
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.05, rotate: 2 }}>
                                                    <CardObjetivo Title="UI UX" description="Figma" />
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.05, rotate: -2 }}>
                                                    <CardObjetivo Title="Banco de Dados" description="MySQL" />
                                                </motion.div>
                                            </motion.div>

                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="font-mono text-gray-300 text-xs sm:text-sm md:text-base space-y-3 md:space-y-4 relative"
                                            >
                                                <p>
                                                    Sou estudante do 5º semestre de Ciência da Computação na PUCPR, com foco em 
                                                    <span className="text-green-500 font-semibold"> desenvolvimento web</span>.
                                                    <br />
                                                    Possuo conhecimento em tecnologias como <span className="font-semibold text-white">Flask, Mysql, Spark</span>...
                                                    <br />
                                                    Em projetos acadêmicos, trabalhei com <span className="text-green-500 font-semibold">sistemas distribuídos</span> (<span className="font-semibold text-white">MapReduce</span> e <span className="font-semibold text-white">Spark</span>) e administração de redes.
                                                    <br />
                                                    Já atuei como <span className="font-semibold text-white">menor aprendiz</span> na <span className="font-semibold text-white">DBM Contact Center</span>, prestando suporte de TI e atendimento ao cliente.
                                                </p>
                                            </motion.div>
                                            <div className="flex gap-2">
                                             <motion.a 
                                            href="./CV/Currículo.pdf"
                                            download="Curriculo_Igor_Gutierrez.pdf"
                                            className="flex ml-5 items-center gap-2 px-6 py-3 rounded-md bg-green-600 text-white font-mono border border-none  hover:bg-green-700 transition-all duration-300 group"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <HiDocumentCheck className="text-2xl text-white group-hover:rotate-12 transition-transform duration-300" />
                                            <span className="text-sm">Download CV</span>
                                        </motion.a>

                                        </div>
                                        </>
                                    ) : (
                                        <div className="flex flex-col text-center lg:text-left">
                                            <span className="font-semibold text-white">Sobre meu lado pessoal...</span>
                                            <p className="text-sm sm:text-base text-gray-300">
                                                No meu tempo livre, gosto de desenhar, tocar violão, guitarra e violino, além de assistir a filmes.  
                                                Gosto de aprender novas habilidades quando necessário, sempre buscando melhorar e evoluir, tanto no lado profissional quanto pessoal.
                                            </p>
                                            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                                                <a href="https://letterboxd.com/Wkyouma/" target="_blank" rel="noopener noreferrer">
                                                    <FaFilm className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                                </a>
                                                <a href="https://www.instagram.com/_t3rpl4k_/" target="_blank" rel="noopener noreferrer">
                                                    <FaInstagram className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                                </a>
                                                <a href="https://www.linkedin.com/in/igor-terplak/" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedin className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                                </a>
                                                <a href="https://steamcommunity.com/profiles/76561199218940710/?fbclid=PAZXh0bgNhZW0CMTEAAaZti-KEy7oo1abv8xsP_mZGNbgb9QlaB6JAvR20iV6AM1m9R9u-Owo0YaA_aem_hUSjqCFuyXPs9g9Swq9umQ" target="_blank" rel="noopener noreferrer">
                                                    <FaSteam className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                                </a>
                                                <a href="https://open.spotify.com/user/18rm8dr93v0ydlpe7g5wbk8e5?si=bda0779b40df4d42">
                                                    <FaSpotify className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                         
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                </div>
            </div>
            
        </Section>
    );
}

export default AboutSection;
