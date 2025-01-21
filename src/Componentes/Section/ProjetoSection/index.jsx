const Card = ({ title, description, image }) => {
    return (
        <section className="flex justify-between items-center  p-8 rounded-3xl ">
            <div className="w-96 p-6  border">
                <h2 className="text-2xl font-bold  mb-4">Uma Jornada Incrível</h2>
                <p className="leading-relaxed">
                   {description}
                </p>
                <div className="flex gap-3 justify-center">
                    <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                        Visitar
                    </button>
                    <button className="mt-4 border text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                        GitHub
                    </button>
                </div>

            </div>
            
            <div className=" flex flex-col items-center w-1/2">
                <h1 className="text-2xl font-extrabold mb-4">{title}</h1>
                <img 
                    className="w-full max-h-[500px] rounded-sm object-cover shadow-lg shadow-green-900 hover:scale-105 transition-transform " 
                    alt="" 
                    src={image} 
                />
            </div>
        </section>
    )
}

export default Card;