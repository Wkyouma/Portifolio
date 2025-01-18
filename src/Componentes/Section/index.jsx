const Section = ({ children, backgroundUrl }) => {
    return (
        <section
            className="h-auto sm:h-screen  text-white flex flex-col bg-stone-900 "
        >
            
            
            {children}
        </section>
    );
};

export default Section;
