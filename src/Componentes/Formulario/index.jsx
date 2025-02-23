import React, { useState, useEffect } from "react";
import Input from "../Input";

const Formulario = () => {
    const [formData, setFormData] = useState({ nome: "", email: "", assunto:"", mensagem: "" });
    const [status, setStatus] = useState("");

    useEffect(() => {
        window.emailjs?.init("lSHwsmqh4Rb6FRMPB");
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { nome, email,assunto, mensagem } = formData;

        try {
            const sendEmail = window.emailjs
                ? window.emailjs.send("service_knui4xj", "template_6zq9zux", { nome, email, assunto, mensagem })
                : fetch('https://api.emailjs.com/api/v1.0/email/send', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                          service_id: 'service_knui4xj',
                          template_id: 'template_6zq9zux',
                          user_id: 'lSHwsmqh4Rb6FRMPB',
                          template_params: { nome, email, assunto, mensagem }
                      })
                  });

            const response = await sendEmail;

            if (response.ok || response.text === "OK") {
                setStatus("Email enviado com sucesso!");
                setFormData({ nome: "", email: "", assunto, mensagem: "" });
            } else {
                setStatus("Erro ao enviar email.");
            }
        } catch (error) {
            console.error("Erro ao enviar email:", error);
            setStatus("Erro ao enviar email. Tente novamente.");
        }
    };

    return (
        <div className="absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-zinc-900 h-auto w-full max-w-7xl p-4 sm:p-10 shadow-lg">
                <h2 className="text-green-500 text-3xl sm:text-4xl font-mono mb-4 mt-2 text-center">Entre em Contato</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row items-center mb-10 gap-4">
                        <div className="flex-1 space-y-4 w-full sm:w-auto">
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
                            <Input
                                Label="Assunto:"
                                name="assunto"
                                placeholder="Digite o motivo do contato"
                                value={formData.assunto}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex-1 w-full sm:w-auto">
                            <label className="text-green-500 flex">Mensagem:</label>
                            <textarea
                                name="mensagem"
                                className="bg-zinc-800 rounded-md w-full h-48 text-white p-2 resize-none focus:outline-none focus:ring-1 focus:ring-green-500"
                                placeholder="Digite sua mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 w-full sm:w-40 px-6 py-3 rounded-md transition duration-300 z-20 text-black font-bold mt-4"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
                {status && (
                    <p className={`text-center mt-4 ${status.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Formulario;