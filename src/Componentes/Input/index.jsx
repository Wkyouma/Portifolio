const Input = ({ placeholder, Label, value, onChange, name }) => {
    return (
        <div className="flex flex-col">
            <label className="text-green-500 flex right-0">{Label}</label>
            <input
                className="bg-zinc-800 h-10 rounded-md w-80"
                placeholder={placeholder}
                value={value} // Controla o valor do input a partir do estado
                onChange={onChange} // Atualiza o estado ao mudar o valor
                name={name} // Para que o 'name' seja passado corretamente para o 'handleChange'
            />
        </div>
    );
}

export default Input;
