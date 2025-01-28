import Titulo from "../../Titulo"
import CardObjetivo from "./CardObjetivo"

const AboutSection = () => {
    return(
        <div className="flex flex-col items-center justify-center p-16">
            <Titulo className="mb-10">Sobre mim</Titulo>
            <div className="
                flex flex-col lg:flex-row items-center mt-10
                justify-center w-full max-w-5xl border 
                 sm:m-7overflow-hidden shadow-lg p-6 md:p-10">
                <div className="w-full lg:w-1/3 flex flex-col  items-center mb-8 lg:mb-0">
                    <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-green-500 to-white blur-lg
                        "></div>
                        <div className="relative z-10">
                            <img 
                                src="./Galeria/euzinho.png" 
                                className="h-48 w-48 md:h-60 md:w-60 rounded-full object-cover transition-transform duration-300 hover:scale-110" 
                                alt="Imagem do usuário" 
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col items-center text-center space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full text-center">
                       <CardObjetivo Title='teste 1' description='teste1'></CardObjetivo>
                       <CardObjetivo Title='teste 2' description='teste2'></CardObjetivo>
                       <CardObjetivo Title='teste 3' description='teste3'></CardObjetivo>
                       
                    </div>
                    <p className="max-w-xl text-sm md:text-base text-gray-300 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti iste inventore sapiente beatae quos incidunt 
                        commodi libero cumque quisquam, amet ut.
                    </p>
                    <a href='./CV/Currículo (14).pdf'
                        download="Curriculo_Igor_Gutierrez.pdf"
                        className=" bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 
                        transition  duration-300">
                        Baixar CV
                    </a>
                </div>
            </div>
        </div>
    )
}
export default AboutSection