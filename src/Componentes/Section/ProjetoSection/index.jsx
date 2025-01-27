
import Button from "../../Button";
import Carousel from "../../Carrousel";

const Card = ({ title, description, images, Link }) => {
    return (
        <section className="flex flex-col sm:flex-row justify-between items-center p-8 rounded-3xl space-y-6 gap-7 sm:space-y-0">
            <div className="w-72 sm:w-80 p-6 border rounded-lg">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Uma Jornada Incrível</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                   {description}
                </p>
                <div className="flex gap-3 justify-center items-center mt-4">
                    <Button href={Link} primeiro={true} segundo={false} direcao={null} delay={null}>Visitar</Button>
                    <Button href='https://github.com/Wkyouma/Portifolio' primeiro={false} segundo={true} direcao={null} delay={null}>Github</Button>
                </div>
            </div>
            
            <div className="flex flex-col items-center w-full sm:w-1/2">
                <h1 className="text-xl sm:text-2xl font-extrabold mb-4 text-center sm:text-left">{title}</h1>
                <Carousel images={images} />
            </div>
        </section>
    )
}
export default Card;