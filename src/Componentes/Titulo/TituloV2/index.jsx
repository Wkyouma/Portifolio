import { motion} from "framer-motion";

export default function({children}){
    return(
        <div className='flex ml-20 mt-20'>
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
        className="text-6xl text-white font-mono z-10 cursor-default relative
        after:content-[''] after:absolute after:left-0 after:-bottom-1/4 after:w-0 after:h-[3px] 
        after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
    >
        {children}
    </motion.h1>
    </div>
    )
}