const Card = ({ children }) => {
    return (
        <section className="flex justify-between items-center  p-8 rounded-3xl shadow-xl">
            <div className="w-96 p-6  border">
                <h2 className="text-2xl font-bold  mb-4">Uma Jornada Incrível</h2>
                <p className="leading-relaxed">
                    Descubra histórias fascinantes que vão além do comum. Cada palavra é uma porta para novas perspectivas e experiências únicas que podem transformar sua visão de mundo.
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
            
            <div className="flex flex-col items-center w-1/2">
                <h1 className="text-2xl font-extrabold mb-4">{children}</h1>
                <img 
                    className="w-full max-h-[500px] rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform" 
                    alt="" 
                    src="./Galeria/Eva.gif" 
                />
            </div>
        </section>
    )
}

export default Card;