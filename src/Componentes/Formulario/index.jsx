import React, { useState, useRef, useEffect } from "react";
import Input from "../Input";

const Formulario = () => {
    const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
    const [status, setStatus] = useState(""); 
    const form = useRef();

    useEffect(() => {
        // Inicializa EmailJS se estiver disponível globalmente
        if (window.emailjs) {
            window.emailjs.init("lSHwsmqh4Rb6FRMPB");
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Tenta usar o EmailJS global
            if (window.emailjs) {
                window.emailjs.send(
                    "service_knui4xj", 
                    "template_6zq9zux", 
                    {
                        nome: formData.nome,       
                        email: formData.email,      
                        mensagem: formData.mensagem 
                    }
                )
                .then(
                    (result) => {
                        setStatus("Email enviado com sucesso!");
                        setFormData({ nome: "", email: "", mensagem: "" }); 
                        console.log("Sucesso:", result.text);
                    },
                    (error) => {
                        console.error("Erro ao enviar email:", error);
                        setStatus("Erro ao enviar email.");
                    }
                );
            } else {
                // Fallback para fetch
                const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        service_id: 'service_knui4xj',
                        template_id: 'template_6zq9zux',
                        user_id: 'lSHwsmqh4Rb6FRMPB',
                        template_params: {
                            nome: formData.nome,
                            email: formData.email,
                            mensagem: formData.mensagem
                        }
                    })
                });

                if (response.ok) {
                    setStatus("Email enviado com sucesso!");
                    setFormData({ nome: "", email: "", mensagem: "" });
                } else {
                    setStatus("Erro ao enviar email.");
                }
            }
        } catch (error) {
            console.error("Erro fatal:", error);
            setStatus("Erro ao enviar email. Tente novamente.");
        }
    };

    return (
        <div className="bg-zinc-900 h-auto w-96 rounded-md flex flex-col justify-center">
            <h2 className="text-green-500 text-3xl sm:text-4xl font-mono mb-4 mt-2">
                Entre em Contato
            </h2>
            <form 
                ref={form}
                className="flex flex-col m-5 gap-6 items-center" 
                onSubmit={handleSubmit}
            >
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
                <div className="w-full">
                    <label className="block mb-2 text-green-500">
                        Mensagem:
                    </label>
                    <textarea
                        name="mensagem"
                        className="bg-zinc-800 rounded-md w-full h-20 text-white p-2"
                        placeholder="Digite sua mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="bg-green-500 hover:bg-green-600 w-36 px-6 py-3 rounded-full transition duration-300 z-20 text-black font-bold"
                >
                    Enviar
                </button>
            </form>
            {status && (
                <p className={`
                    text-center mt-4 
                    ${status.includes('sucesso') ? 'text-green-500' : 'text-red-500'}
                `}>
                    {status}
                </p>
            )}
        </div>
    );
};

export default Formulario;