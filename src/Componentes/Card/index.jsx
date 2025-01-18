const Card = ({ children }) => {
    return (
        <div className="
            bg-green-500 bg-opacity-30 backdrop-blur-lg 
            p-6 
            rounded-xl 
            shadow-2xl 
            border-transparent
            transition-all 
            duration-300 
            transform 
            hover:scale-105
            text-white
            font-mono
            text-lg
        ">
            {children}
        </div>
    )
}

export default Card;