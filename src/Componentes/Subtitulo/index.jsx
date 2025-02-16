import { motion } from "framer-motion";

const Subtitulo = ({ children }) => {
    return (
        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                ease: "backInOut",
                delay: 0.2
            }}
            className="text-2xl text-white font-mono mb-8 z-10"
        >
            {children}
        </motion.p>
    );
};

export default Subtitulo;
