import { Element } from 'react-scroll';
const Section = ({ children, id }) => {
    return (
        <Element name={id} className="h-auto font-mono text-white text- flex flex-col bg-transparent visited:text-green-600"> 
            <div className='flex items-center justify-center flex-col  '>
            {children}
            </div>
        </Element>
    );
};

export default Section;
