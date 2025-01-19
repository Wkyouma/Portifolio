// Cabecalho.js
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-scroll";
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
                    <li><Link to="Home" smooth={true} duration={500} className="hover:text-green-400">Home </Link></li>
                    <li><Link to="projetos" smooth={true} duration={500} className="hover:text-green-400">Projetos </Link></li>
                    <li className="hover:text-green-400" > Contato </li>
                </ul>
                <TfiMenu size={30} className="cursor-pointer" onClick={toggleModal} />
            </nav>

            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </header>
    );
}
export default Cabecalho;