import { motion } from "framer-motion";
import clsx from "clsx";

const Button = ({ children, primeiro, segundo, direcao, delay, href }) => {
    return (
        <motion.a
            href={href}
            target="_blank" // Abre o link em uma nova guia
            initial={{ opacity: 0, x: direcao }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.3,
                ease: "backInOut",
                delay: delay,
            }}
            className={clsx(
                "w-36 px-6 py-3 rounded-full transition duration-300 z-20",
                primeiro && "bg-green-500 hover:bg-green-600 text-white",
                segundo
                    ? "bg-transparent text-white border-2 hover:bg-white hover:text-black cursor-pointer"
                    : "hover:shadow-md"
            )}
            disabled={segundo} 
        >
            {children}
        </motion.a>
    );
};

export default Button;
