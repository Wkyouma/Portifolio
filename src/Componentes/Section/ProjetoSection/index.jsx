import Button from "../../Button";
import Carousel from "../../Carrousel";


const Card = ({ title, description, images, Link, Repositorio }) => {
    return (
        <div className="
            flex flex-col lg:flex-row bg-zinc-800/50 overflow-hidden shadow-lg mb-8 t
            ransition-all duration-300 hover:scale-105">
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center bg-zinc-900/60">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-500">
                    {title}
                </h2>
                <p className="leading-relaxed text-sm sm:text-base text-gray-300 mb-6">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Button 
                        href={Link} 
                        primeiro={true} 
                        segundo={false} 
                        direcao={null} 
                        delay={null}
                    >
                        Visitar
                    </Button>
                    <Button 
                        href={Repositorio}
                        primeiro={false} 
                        segundo={true} 
                        direcao={null} 
                        delay={null}
                    >
                        Github
                    </Button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4">
                <Carousel images={images} />
            </div>
        </div>
    )
}

export default Card;