import Titulo from "../../Titulo"
import CardObjetivo from "./CardObjetivo"
import Section from "../../Section/index"
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <Section id="about">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="container max-w-7xl mx-auto px-4 py-16 relative"
            >
                
                
                {/* Neon Title */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-12"
                >
                    <Titulo className=" relative">
                        <span className="relative">
                            Sobre mim
                        </span>
                    </Titulo>
                </motion.div>
                
                <motion.div 
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    className="bg-zinc-800/50 rounded-2xl backdrop-blur-lg shadow-[0_0_15px_rgba(34,_197,_94,_0.5)] p-8 md:p-12 border border-green-500/20"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Profile Image with Retro Effects */}
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

                        {/* Content Section */}
                        <div className="lg:w-2/3 space-y-8">
                            {/* Animated Skill Cards */}
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
                                    <CardObjetivo Title="React Specialist" description="Modern Web Apps" />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05, rotate: -2 }}>
                                    <CardObjetivo Title="Problem Solver" description="Analytical Thinking" />
                                </motion.div>
                            </motion.div>

                            {/* Bio Text with Gradient Highlights */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="prose prose-invert max-w-none text-gray-300 text-sm md:text-base space-y-4 relative"
                            >
                                <span className="font-semibold text-white">Sou estudante do 5º semestre de Ciência da Computação na PUCPR</span>, com foco em 
                                <span className="text-green-500 font-semibold"> desenvolvimento web</span>.
                                <br />
                                <br />
                                Tenho experiência prática com <span className="text-green-500 font-semibold">React</span>, onde desenvolvi aplicações frontend dinâmicas e interativas, utilizando 
                                <span className="font-semibold text-white"> componentização, estado, hooks</span> e integração com <span className="font-semibold text-white">APIs</span>.
                                <br />
                                <br />
                                Além disso, possuo conhecimento em tecnologias como <span className="font-semibold text-white">Flask, SQLAlchemy, Spark</span> e <span className="font-semibold text-white">FreeRTOS</span>, e linguagens como <span className="font-semibold text-white">Java, Python, C, JavaScript</span> e <span className="font-semibold text-white">TypeScript</span>.
                                <br />
                                Em projetos acadêmicos, trabalhei com <span className="text-green-500 font-semibold">desenvolvimento de dashboards, sistemas distribuídos</span> (<span className="font-semibold text-white">MapReduce</span> e <span className="font-semibold text-white">Spark</span>) e administração de redes.
                                <br />
                                Já atuei como <span className="font-semibold text-white">menor aprendiz</span> na <span className="font-semibold text-white">DBM Contact Center</span>, prestando suporte de TI e atendimento ao cliente, o que me proporcionou habilidades em <span className="font-semibold text-white">resolução de problemas</span> e <span className="font-semibold text-white">comunicação técnica</span>.
                                <br />
                                <br />
                                Atualmente, estou aprimorando minhas habilidades em 
                                <span className="font-semibold text-green-500">React</span> 
                                e desenvolvimento frontend, explorando conceitos como 
                                <span className="font-semibold text-white">melhores práticas de performance, organização de componentes</span>
                                e <span className="font-semibold text-white">otimização da renderização</span>.
                                <br />
                                <br />
                                Tenho interesse em aprofundar conhecimentos em <span className="text-green-500 font-semibold">SSR (Server-Side Rendering), Next.js</span> e outros frameworks como <span className="text-green-500 font-semibold">Vue</span> e <span className="text-green-500 font-semibold">Angular</span>.
                            </motion.div>

                            {/* Retro Wave CV Button */}
                            <motion.div 
                                className="flex justify-center lg:justify-start"
                                whileHover={{ scale: 1.05 }}
                            >
                                <a 
                                    href="./CV/Currículo (14).pdf"
                                    download="Curriculo_Igor_Gutierrez.pdf"
                                    className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="relative flex items-center gap-2">
                                        <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Baixar CV
                                    </span>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default AboutSection