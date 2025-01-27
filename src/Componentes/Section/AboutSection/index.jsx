import Titulo from "../../Titulo"
{/* em breve */}
const AboutSection = () => {
    return(
        <div className="flex flex-col items-center justify-center">
            <Titulo>Sobre mim</Titulo>
            <div className=" flex flex-col justify-center items-center border w-2/6 m-10 p-10">
            <div className="relative inline-block m-5">
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-green-500 to-white blur-lg"></div>
                <div className="relative z-10 border border-transparent rounded-full ">
                    <img src="./Galeria/euzinho.png" className="h-60 w-60 rounded-full transition-transform duration-300  hover:scale-110" alt="Imagem do usuário" />
                </div>
            </div>
                <div className="flex flex-col gap-10 text-left h-96 ">
                    <a>Objetivos:</a>
                    <a>Objetivos:</a>
                    <a>Objetivos:</a>
                    <p className="flex w-96 justify-center text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste inventore sapiente beatae quos 
                        incidunt commodi libero cumque quisquam, amet ut. Accusamus, dolores non. Autem assumenda consequuntur
                        quam nostrum laudantium.
                    </p>
                </div>
                <a
            href='./CV/Currículo (14).pdf'
            download="Curriculo_Igor_Gutierrez.pdf">Baixar CV</a>
            </div>
            
        </div>
    )
}
export default AboutSection