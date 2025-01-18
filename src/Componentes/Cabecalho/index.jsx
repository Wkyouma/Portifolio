// Cabecalho.js
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Modal from '../Modal/index'; 

const Cabecalho = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
            <nav className="flex justify-between items-center p-4">
                <ul className="flex space-x-4 m-1 text-white">
                    <li><Link to='/' className="hover:text-green-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-green-400">Sobre</Link></li>
                    <li><Link to="/services" className="hover:text-green-400">Serviços</Link></li>
                    <li><Link to="/contact" className="hover:text-green-400">Contato</Link></li>
                </ul>
                <TfiMenu size={30} className="cursor-pointer" onClick={toggleModal} />
            </nav>

            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </header>
    );
}
export default Cabecalho;