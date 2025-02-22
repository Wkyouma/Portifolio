import clsx from "clsx";

const Button = ({ children, primeiro, segundo, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            className={clsx(
                "w-36 px-6 py-3 rounded-full transition duration-300 z-20",
                primeiro && "bg-green-500 hover:bg-green-600 text-white",
                segundo && "bg-transparent text-white border-2 hover:bg-white hover:text-black cursor-pointer"
            )}
            disabled={segundo} 
        >
            {children}
        </a>
    );
};

export default Button;