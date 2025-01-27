import { useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../Input";

const Formulario = () => {
    const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
    const [status, setStatus] = useState(""); // Para exibir mensagens de status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_knui4xj", //Service ID
                "template_6zq9zux", //Template ID
                {
                    nome: formData.nome,       
                    email: formData.email,      
                    mensagem: formData.mensagem 
                },
                "lSHwsmqh4Rb6FRMPB" //Public Key
            )
            .then(
                (result) => {
                    setStatus("Email enviado com sucesso!");
                    setFormData({ nome: "", email: "", mensagem: "" }); 
                },
                (error) => {
                    console.error("Erro ao enviar email:", error);
                    setStatus("Erro ao enviar email.");
                }
            );
    };

    return (
        <div className="bg-zinc-900 h-auto w-96 rounded-md flex flex-col justify-center">
            <h2 className="text-green-500 text-3xl sm:text-4xl font-mono mb-4 mt-2">
                Entre em Contato
            </h2>
            <form className="flex flex-col m-5 gap-6 items-center" onSubmit={handleSubmit}>
                <Input
                    Label="Nome:"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
                <Input
                    Label="Email:"
                    name="email"
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <div>
                    <label className="m-0 flex right-0 items-start p-0 text-green-500">
                        Mensagem:
                    </label>
                    <textarea
                        name="mensagem" // Nome correspondente ao placeholder
                        className="bg-zinc-800 rounded-md w-80 h-20"
                        placeholder="Digite sua mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-600 w-36 px-6 py-3 rounded-full transition duration-300 z-20">
                    Enviar
                </button>
            </form>
            {status && <p className="text-green-500 mt-4">{status}</p>}
        </div>
    );
};

export default Formulario;
