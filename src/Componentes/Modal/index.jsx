import { IoMdClose } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useEffect } from 'react';
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
        window.open('', '_blank');
        onClose();
    };

    const handleServicos = () => {
        const element = document.getElementById('projetos');
        if (element) {
            const yOffset = -100; // ajuste conforme necessário
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        onClose();
    };

    const handleContato = () => {
        const element = document.getElementById('contato');
        if (element) {
            const yOffset = -100; // ajuste conforme necessário
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
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
            <button
                onClick={onClose}
                className="absolute top-8 right-8 p-3 bg-red-800 hover:bg-red-600 text-white rounded-full transition-colors"
            >
                <IoMdClose size={24} />
            </button>

            <nav className="relative">
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
        </motion.div>
    );
};

export default Modal;