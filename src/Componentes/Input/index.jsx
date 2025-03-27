const Input = ({ placeholder, Label, value, onChange, name, required }) => {
    return (
        <div className="flex flex-col w-full">
            <label className="text-green-500 mb-1 text-sm sm:text-base">{Label}</label>
            <input
                className="bg-zinc-800 h-12 sm:h-14 rounded-md 
                    focus:outline-none focus:ring-1 focus:ring-green-500 
                    p-3 w-full text-white
                    placeholder:text-zinc-500 text-sm sm:text-base"
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
                name={name} 
                required={required}
            />
        </div>
    );
}

export default Input;
