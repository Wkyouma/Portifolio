const CardObjetivo = ({Title, description}) => {
    return(
        <div className="
            bg-zinc-700/50 p-3 sm:p-4 border-t-2 border-green-400
            hover:bg-zinc-700 
            transition
            h-full
        ">
            <h3 className="font-bold text-green-400 font-mono text-sm sm:text-base">{Title}</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-mono mt-1">{description}</p>
        </div>
    )
}
export default CardObjetivo