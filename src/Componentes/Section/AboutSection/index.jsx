import Titulo from "../../Titulo";
import CardObjetivo from "./CardObjetivo";
import Section from "../../Section/index";
import { motion } from 'framer-motion';
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaSteam, FaFilm } from 'react-icons/fa';

const AboutSection = () => {
    const [profissional, setProfissional] = useState(true);
    const toggleContent = () => {
        setProfissional(prev => !prev); 
    };

    return (
        <Section id="about">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="container max-w-7xl mx-auto px-4 py-16 relative"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-12"
                >
                    <Titulo className="relative text-center">
                        <span className="relative text-2xl font-semibold text-white">Sobre mim</span>
                    </Titulo>
                </motion.div>

                <motion.div 
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    className="bg-zinc-800/70 shadow-lg shadow-zinc-900 rounded-2xl p-8 md:p-12"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div 
                            className="lg:w-1/3 flex justify-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#22c55e,#059669,#22c55e)] opacity-75 blur-xl group-hover:blur-2xl group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute inset-0 rounded-full animate-pulse-slow mix-blend-overlay bg-gradient-to-r from-green-500/30 to-emerald-500/30"></div>
                                <img 
                                    src="./Galeria/euzinho.png" 
                                    className="relative h-48 w-48 md:h-64 md:w-64 rounded-full object-cover transition-all duration-300 group-hover:scale-105 border-2 border-green-500/50" 
                                    alt="Igor Gutierrez" 
                                />
                            </div>
                        </motion.div>

                        <div className="lg:w-2/3 space-y-8 text-center lg:text-left">
                            {profissional ? (
                                <>
                                  <motion.div 
                                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
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
                                        className="font-mono text-gray-300 text-sm md:text-base space-y-4 relative"
                                    >
                                        <p>
                                            Sou estudante do 5º semestre de Ciência da Computação na PUCPR, com foco em 
                                            <span className="text-green-500 font-semibold"> desenvolvimento web</span>.
                                            <br />
                                            Possuo conhecimento em tecnologias como <span className="font-semibold text-white">Flask, SQLAlchemy, Spark</span>...
                                            <br />
                                            Em projetos acadêmicos, trabalhei com <span className="text-green-500 font-semibold">sistemas distribuídos</span> (<span className="font-semibold text-white">MapReduce</span> e <span className="font-semibold text-white">Spark</span>) e administração de redes.
                                            <br />
                                            Já atuei como <span className="font-semibold text-white">menor aprendiz</span> na <span className="font-semibold text-white">DBM Contact Center</span>, prestando suporte de TI e atendimento ao cliente.
                                        </p>
                                    </motion.div>

                                    <a 
                                        href="./CV/Currículo (14).pdf"
                                        download="Curriculo_Igor_Gutierrez.pdf"
                                        className="group relative inline-flex items-center px-8 py-4 rounded-full bg-green-500 text-white font-bold overflow-hidden hover:bg-green-600 hover:scale-105 transition-all duration-500"
                                    >
                                        <span className="relative flex items-center gap-2">
                                            Baixar CV
                                        </span>
                                    </a>
                                </>
                            ) : (
                                <div className="flex flex-col text-center lg:text-left">
                                    <span className="font-semibold text-white">Sobre meu lado pessoal...</span>
                                    <p className="text-lg text-gray-300">
                                        No meu tempo livre, gosto de desenhar, tocar violão, guitarra e violino, além de assistir a filmes.  
                                        Apesar de meu foco ser tecnologia, também valorizo momentos desconectados, onde posso relaxar e aproveitar outras áreas da vida.  
                                        Gosto de aprender novas habilidades quando necessário, sempre buscando melhorar e evoluir, tanto no lado profissional quanto pessoal.
                                    </p>
                                    <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                                        <a href="https://letterboxd.com" target="_blank" rel="noopener noreferrer">
                                            <FaFilm className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                        </a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                        </a>
                                        <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer">
                                            <FaSteam className="text-white text-2xl hover:text-green-500 transition-all duration-300" />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={toggleContent}
                    className="mt-6 inline-flex items-center px-8 py-4 rounded-full bg-green-500 text-white font-bold overflow-hidden hover:bg-green-600 transition-all duration-500"
                >
                    <span className="relative flex items-center gap-2">
                        {profissional ? "Mostrar conteúdo pessoal" : "Mostrar conteúdo profissional"}
                    </span>
                </motion.button>
            </motion.div>
        </Section>
    );
}

export default AboutSection;
