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

    const handleContato = () => {
        window.open('https://mail.google.com/mail/u/0/?pli=1#inbox','_blank')
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
            

            <nav className="relative w-full max-w-sm mx-auto px-4">
                <div className="flex flex-col items-center gap-4 md:gap-6">
                    <MenuItem 
                        icon={FaInstagram} 
                        text="Instagram" 
                        onClick={handleInstagram}
                        className="w-full"
                    />
                    <MenuItem 
                        icon={FaLinkedin} 
                        text="Linkedin" 
                        onClick={handleLinkedin}
                        className="w-full"
                    />
                    <MenuItem 
                        icon={MdEmail} 
                        text="Contato" 
                        onClick={handleContato}
                        className="w-full"
                    />
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={onClose}
                        className="flex justify-center items-center bg-red-800 hover:bg-red-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full transition-colors">
                        <IoMdClose className="w-6 h-6 md:w-8 md:h-8" />
                    </motion.button>
                </div>
            </nav>
        </motion.div>
    );
};

export default Modal;