import { Element } from 'react-scroll';
const Section = ({ children, id }) => {
    return (
        <Element name={id} className="h-auto sm:h-screen  text-white flex flex-col bg-stone-900 "> 
            <div className='border m-2 h-screen'>
            {children}
            </div>
        </Element>
    );
};

export default Section;
