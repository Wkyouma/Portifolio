import { IoMdClose } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ icon: Icon, text, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
    >
        <button 
            onClick={onClick}
            className="w-full group flex items-center justify-center gap-4 p-4 text-4xl font-mono text-white/90 hover:text-green-400 transition-all duration-300"
        >
            <Icon className="text-3xl" />
            <span>{text}</span>
        </button>
    </motion.div>
);

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleInstagram = () => {
        window.open('https://www.instagram.com/igorgutierrez_/', '_blank');
        onClose();
    };

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/igor-gutierrez-terplak-3b9a1b1b9/', '_blank');
        onClose();
    };

    const handleServicos = () => {
        document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
        onClose();
    };

    const handleContato = () => {
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center">
            <button
                onClick={onClose}
                className="absolute top-8 right-8 p-3 bg-red-800 hover:bg-red-600 text-white rounded-full"
            >
                <IoMdClose size={24} />
            </button>

            <nav>
                <div className="flex flex-col gap-6">
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
                </div>
            </nav>
        </div>
    );
};

export default Modal;