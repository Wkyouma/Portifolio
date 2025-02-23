const Input = ({ placeholder, Label, value, onChange, name, required }) => {
    return (
        <div className="flex flex-col">
            <label className="text-green-500 flex right-0">{Label}</label>
            <input
                className="bg-zinc-800 h-16 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 p-2 w-10/12"
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
