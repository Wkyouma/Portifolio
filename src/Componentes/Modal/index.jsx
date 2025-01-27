import { IoMdClose } from "react-icons/io";
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
        <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div 
                className="bg-transparent p-6 rounded shadow-lg">
                <ul className="flex flex-col text-4xl font-mono space-y-2 z-10">
                    <motion.li
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ 
                        duration: 0.3, 
                        ease: "backInOut",
                        delay: 0.2 
                    }} >
                        <Link to='/' className="hover:text-green-400" onClick={onClose}>Instagram</Link>
                    </motion.li>
                    <motion.li
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ 
                        duration: 0.3, 
                        ease: "backInOut",
                        delay: 0.4 
                    }}>
                        <Link to="/about" className="hover:text-green-400" onClick={onClose}>Linkedin</Link>
                        </motion.li>
                    <motion.li
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ 
                        duration: 0.3, 
                        ease: "backInOut",
                        delay: 0.6 
                    }}>
                        <Link to="/services" className="hover:text-green-400" onClick={onClose}>Serviços</Link>
                        </motion.li>
                    <motion.li
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ 
                        duration: 0.3, 
                        ease: "backInOut",
                        delay: 0.8 
                    }}>
                        <Link to="/contact" className="hover:text-green-400" onClick={onClose}>Contato</Link>
                        </motion.li>
                </ul>
                <motion.button
                 initial={{ opacity: 0, x: -100 }}
                 animate={{ opacity: 1, x: 1 }}
                 transition={{ 
                     duration: 0.1, 
                     ease: "backInOut",
                     delay: 1.0
                 }}
                 className="transitions-colors duration-200 mt-4 p-4 bg-red-800 text-white rounded-full font-mono  hover:bg-red-400" onClick={onClose}>
                    <IoMdClose size={25}/>
                 </motion.button>
            </div>
        </motion.div>
    );
};

export default Modal;