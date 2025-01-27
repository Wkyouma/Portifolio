import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";
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

        // Confirme os dados no console
        console.log("Dados enviados:", formData);

        emailjs
            .send(
                "service_knui4xj", // Substitua pelo seu Service ID
                "template_6zq9zux", // Substitua pelo seu Template ID
                {
                    nome: formData.nome,        // Campo "nome" do formulário
                    email: formData.email,      // Campo "email" do formulário
                    mensagem: formData.mensagem // Campo "mensagem" do formulário
                },
                "lSHwsmqh4Rb6FRMPB" // Substitua pelo seu Public Key
            )
            .then(
                (result) => {
                    setStatus("Email enviado com sucesso!");
                    setFormData({ nome: "", email: "", mensagem: "" }); // Limpa os campos
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
                <Button primeiro={true} segundo={false} direcao={0} delay={0}>
                    Enviar
                </Button>
            </form>
            {status && <p className="text-green-500 mt-4">{status}</p>}
        </div>
    );
};

export default Formulario;
