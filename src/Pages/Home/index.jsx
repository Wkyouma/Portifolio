import { Element } from 'react-scroll';
import Titulo from '../../Componentes/Titulo';
import Subtitulo from '../../Componentes/Subtitulo';
import Section from '../../Componentes/Section';
import TechIcons from '../../Componentes/TechIcons';
import Card from '../../Componentes/Section/ProjetoSection';
import useRandomBackground from '../../Hooks/index';
import ProjetoData from '../../Projetos.json';
import Formulario from '../../Componentes/Formulario';
import AboutSection from '../../Componentes/Section/AboutSection';
import Button from '../../Componentes/Button';
import retroOld from '/Galeria/retro-old.gif';
import cowboy from '/Galeria/cowboy.gif';
import retro from '/Galeria/retro.gif';
import ashita from '/Galeria/Ashita.gif';
import anime from '/Galeria/anime.gif';
import lain from '/Galeria/lain.gif';
import cyber from '/Galeria/Cyber.gif';
import asImage from '/Galeria/as.gif';
import Teclar from '/Galeria/teclar.gif';

const backgrounds = [
    `url(${retroOld})`,
    `url(${cowboy})`,
    `url(${retro})`,
    `url(${ashita})`,
    `url(${anime})`,
    `url(${lain})`,
    `url(${cyber})`,
    `url(${asImage})`,
];

const secondBackgrounds = [
    `url(${Teclar})`,
];

const Home = () => {
    const background = useRandomBackground(backgrounds, 2000);
    const secondBackground = useRandomBackground(secondBackgrounds, 3000);

    return (
        <div className="relative z-0 bg-gradient-to-t from-zinc-900 to-black ">
            <Element name='Home'>
                <div 
                    className={`h-[100vh] sm:h-auto bg-cover bg-center relative transition-colors duration-300`}
                    style={{ 
                        backgroundImage: background,
                        backgroundAttachment: 'fixed', 
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="h-screen inset-0 bg-black/30 z-50"></div>
                    <div className="absolute inset-0 m-2 max-h-svh flex justify-center items-center flex-col text-center z-10 border">
                        <Titulo className="text-3xl sm:text-4xl">Igor <span className='text-green-300'>Terplak</span></Titulo>
                        <Subtitulo className="text-lg sm:text-xl md:text-2xl">Desenvolvedor Front-end | Designer Criativo</Subtitulo>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                            <Button href='#projetos' primeiro={true} segundo={false} direcao={-100} delay={0.5}>
                                Ver Projetos
                            </Button>
                            <Button href='https://github.com/Wkyouma' primeiro={false} segundo={true} direcao={100} delay={0.5}>
                                Github
                            </Button>
                        </div>
                        <div className='font-mono absolute top-1/2 right-0 transform translate-y-[-50%]'>
                            <div className='flex flex-col text-3xl sm:text-4xl mr-3 border-t-2 border-b-2'> 
                                <span>0</span>
                                <span>0</span>
                                <span>2</span>
                            </div>
                        </div>
                        <h1 className="absolute bottom-0 left-0 mb-4 ml-4 font-mono text-3xl sm:text-4xl text-white z-10">WELCOME</h1>
                    </div>
                </div>
            </Element>         
            <TechIcons />
            <Element id='Sobre'>
            <span className='text-white text-xs sm:text-5xl'>___________________________________________________________</span>
            <AboutSection  />
            </Element>
            <Section id="projetos">
                <Titulo>Projetos Recentes</Titulo>
                <div className='grid gap-5 m-5 grid-cols-1 sm:grid-cols-3'>
                {ProjetoData.map((Projeto, index) => (
                    <Card 
                        key={index} 
                        title={Projeto.title} 
                        description={Projeto.description} 
                        Link={Projeto.link}
                        Repositorio={Projeto.Repositorio}
                        images={Projeto.images} 
                    />
                ))}
                </div>
            </Section>
            
            <Section id="contato">
                <div 
                    className={`w-full h-[80vh] sm:h-auto sm:min-h-screen bg-cover bg-center relative transition-colors duration-300 `}
                    style={{ 
                        backgroundImage: secondBackground,
                        backgroundAttachment: 'fixed', // Mantido para desktop
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="flex justify-center sm:h-auto sm:min-h-screen items-center border m-2">
                        <Formulario />
                    </div>
                </div>
            </Section>
        </div>
    );
}

export default Home;