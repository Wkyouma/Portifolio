import { motion } from 'framer-motion';
import React from 'react';

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
export default MenuItem;