import React, { useState, useEffect } from "react";
import Input from "../Input";

const Formulario = () => {
    const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
    const [status, setStatus] = useState("");

    useEffect(() => {
        window.emailjs?.init("lSHwsmqh4Rb6FRMPB");
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { nome, email, mensagem } = formData;

        try {
            const sendEmail = window.emailjs
                ? window.emailjs.send("service_knui4xj", "template_6zq9zux", { nome, email, mensagem })
                : fetch('https://api.emailjs.com/api/v1.0/email/send', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                          service_id: 'service_knui4xj',
                          template_id: 'template_6zq9zux',
                          user_id: 'lSHwsmqh4Rb6FRMPB',
                          template_params: { nome, email, mensagem }
                      })
                  });

            const response = await sendEmail;

            if (response.ok || response.text === "OK") {
                setStatus("Email enviado com sucesso!");
                setFormData({ nome: "", email: "", mensagem: "" });
            } else {
                setStatus("Erro ao enviar email.");
            }
        } catch (error) {
            console.error("Erro ao enviar email:", error);
            setStatus("Erro ao enviar email. Tente novamente.");
        }
    };

    return (
        <div className="bg-zinc-900 h-auto w-full max-w-md rounded-md flex flex-col justify-center m-5 p-5 shadow-lg">
            <h2 className="text-green-500 text-3xl sm:text-4xl font-mono mb-4 mt-2 text-center">Entre em Contato</h2>
            <form className="flex flex-col gap-6 items-center w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                <Input
                    Label="Nome:"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                <Input
                    Label="Email:"
                    name="email"
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <div className="w-80">
                    <label className="flex  w-80 right-0 text-green-500">Mensagem:</label>
                    <textarea
                        name="mensagem"
                        className="bg-zinc-800 rounded-md w-80 h-24 text-white p-2 resize-none"
                        placeholder="Digite sua mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 w-40 px-6 py-3 rounded-full transition duration-300 z-20 text-black font-bold"
                >
                    Enviar
                </button>
            </form>

            {status && (
                <p className={`text-center mt-4 ${status.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                    {status}
                </p>
            )}
        </div>
    );
};

export default Formulario;