import { motion } from "framer-motion"
import clsx from "clsx";
const Button = ({children,primeiro, segundo, direcao, delay}) => {
    return(
        <motion.button
        initial={{ opacity: 0, x: direcao }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
            duration: 0.3,
            ease: "backInOut",
            delay: delay
        }}
        href="#projetos" 
        className={clsx(
            "w-36 px-6 py-3 rounded-full transition duration-300 z-20", // Classes básicas
            primeiro && "bg-green-500 hover:bg-green-600 text-white", // Condicional
            segundo
              ? "bg-transparent text-white border-2 hover:bg-white hover:text-black cursor-pointer "  
              : "hover:shadow-md"
          )}
          disabled={segundo} // Desabilita o botão
    >
        {children}
    </motion.button>
    )
}
export default Button