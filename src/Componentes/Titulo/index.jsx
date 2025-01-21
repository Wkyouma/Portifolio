import { motion} from "framer-motion";


const Titulo = ({ children }) => {

    return (
        <motion.h1
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{
                duration: 0.3,
                ease: "backInOut",
                delay: 0.2,
            }}
            whileHover={{
                scale: 1.05,
                color: "#34D399",
                textShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: { duration: 0.1 },
            }}
            className="text-6xl text-white font-mono z-10 cursor-pointer"
        >
            {children}
        </motion.h1>
    );
};

export default Titulo;
