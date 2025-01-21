import { Children } from "react"

const Input = ({  placeholder , Label}) => {
    return(
        <div className="flex flex-col">
        <label className="text-green-500 flex right-0">{Label}</label>
        <input className=" bg-zinc-800 h-10 rounded-md w-80 " placeholder={placeholder}></input>
        </div>
    )
}
export default Input