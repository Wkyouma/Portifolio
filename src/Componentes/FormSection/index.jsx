import Formulario from "./Formulario"
import Squares from "./Squares/Squares"


export default function FormSection(){
    return(
        <div className="relative w-full h-screen">
        <Squares
            speed={0.5}
            squareSize={40}
            borderColor="#586359"
            hoverFillColor="#222"
        />
        <Formulario />               
        </div>
    )
}