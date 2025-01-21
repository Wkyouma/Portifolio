// Cabecalho.js
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-scroll";
import { motion } from 'framer-motion'
import Modal from '../Modal/index'; 

const Cabecalho = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-transparent ">
            <nav className="flex justify-between items-center p-4">
                <ul className="cursor-pointer flex space-x-4 m-1 text-white gap-4 ">
                    <motion.li 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "backInOut",
                        delay: 1.2,
                    }}
                    ><Link to="Home" smooth={true} duration={500} className="hover:text-green-400">Home </Link></motion.li>
                    <motion.li
                     initial={{ opacity: 0, x: -100 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{
                         duration: 0.3,
                         ease: "backInOut",
                         delay: 1.4,
                     }}><Link to="projetos" smooth={true} duration={500} className="hover:text-green-400">Projetos </Link></motion.li>
                    <motion.li
                     initial={{ opacity: 0, x: -100 }} 
                     animate={{ opacity: 1, x: 0 }}
                     transition={{
                         duration: 0.3,
                         ease: "backInOut",
                         delay: 1.6,
                     }}> <Link to="contato" smooth={true} duration={500} className="hover:text-green-400" > Contato </Link></motion.li>
                </ul>
                <TfiMenu size={30} className="cursor-pointer" onClick={toggleModal} />
            </nav>

            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </header>
    );
}
export default Cabecalho;