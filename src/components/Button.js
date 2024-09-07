const Button = (props)=>{
    return(
        <div>
        <button className="rounded-lg px-5 py-2 m-3 text-white bg-slate-400">{props.name}</button>
        </div>
    )
}
export default Button;