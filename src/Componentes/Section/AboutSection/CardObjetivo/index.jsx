const CardObjetivo = ({Title, description}) => {
    return(
        <div className="
        bg-zinc-700/50 p-4 rounded-lg 
        hover:bg-zinc-700 
      
        transition
    ">
        <h3 className="font-bold text-green-400 font-mono">{Title}</h3>
        <p className="text-sm text-gray-300 font-mono">{description}</p>
    </div>
    )
}
export default CardObjetivo