import Button from "../Button"
import Input from "../Input"

const Formulario = () => {
    return (<div className="bg-zinc-900 h-auto w-96 rounded-md flex flex-col justify-center ">
        <h2 className="text-green-500 text-3xl sm:text-4xl font-mono mb-4 mt-2">Entre em Contato</h2>
        <form className="flex flex-col m-5 gap-6 items-center">
            <Input Label="Nome:" placeholder="  nome"></Input>
            <Input Label="Email:" placeholder="  email"></Input>
            <div>
                <label className="m-0 flex right-0 items-start p-0 text-green-500 ">mensagem:</label>
                <textarea className="bg-zinc-800 rounded-md w-80 h-20" placeholder="  Mensagem"></textarea>
            </div>
            <Button primeiro={true} segundo={false} direcao={0} delay={0} > enviar</Button>
        </form>

    </div>)
}
export default Formulario