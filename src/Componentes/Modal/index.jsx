import { IoMdClose } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import MenuItem from "./MenuItem/index";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        };
    }, [isOpen]);

    const handleInstagram = () => {
        window.open('https://www.instagram.com/_t3rpl4k_/', '_blank');
        onClose();
    };

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/igor-terplak/', '_blank');
        onClose();
    };

    const handleServicos = () => {
        const element = document.getElementById('projetos');
        if (element) {
            const yOffset = -100; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        onClose();
    };

    const handleContato = () => {
        onClose();
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen flex items-center justify-center"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                zIndex: 9999,
            }}
        >
            

            <nav className="relative">
                <div className="flex flex-col items-center gap-6">
                    <MenuItem 
                        icon={FaInstagram} 
                        text="Instagram" 
                        onClick={handleInstagram}
                    />
                    <MenuItem 
                        icon={FaLinkedin} 
                        text="Linkedin" 
                        onClick={handleLinkedin}
                    />
                    <MenuItem 
                        icon={FaCode} 
                        text="Serviços" 
                        onClick={handleServicos}
                    />
                    <MenuItem 
                        icon={MdEmail} 
                        text="Contato" 
                        onClick={handleContato}
                    />
                    <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={onClose}
                    className=" flex justify-center items-center bg-red-800 hover:bg-red-600 text-white w-16 h-16 rounded-full transition-colors">
                    <IoMdClose size={24} />
                </motion.button>
                </div>
                
            </nav>
        </motion.div>
    );
};

export default Modal;