import { useState, useEffect } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import Modal from '../Modal/index'; 

const Cabecalho = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const navItems = [
        { name: 'Home', to: 'Home' },
        { name: 'Sobre', to: 'Sobre' },
        { name: 'Projetos', to: 'projetos' },
        { name: 'Contato', to: 'contato' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 500) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-50 backdrop-blur-md' : 'bg-transparent'}`}>
            <nav className="flex justify-between items-center p-4">
                <ul className="cursor-pointer flex space-x-4 m-1 text-white gap-4 ">
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={item.name}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "backInOut",
                                delay: 1.2 + (index * 0.2),
                            }}
                            className="relative group"
                        >
                            <Link 
                                to={item.to} 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                onSetActive={() => setActiveSection(item.name)}
                                className={`hover:text-green-400 relative`}
                            >
                                {item.name}
                                <span 
                                    className={`absolute bottom-[-5px] left-0 w-full h-[2px] bg-green-400 transform scale-x-0 transition-transform duration-300 
                                    ${activeSection === item.name ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
                                />
                            </Link>
                        </motion.li>
                    ))}
                </ul>
                <TfiMenu size={30} className="cursor-pointer" onClick={toggleModal} />
            </nav>

            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </header>
    );
}

export default Cabecalho;