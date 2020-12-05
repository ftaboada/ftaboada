import "./style.css"
const ClickView=({msg, setLogicHover})=>{
    const {phrase, logic} = msg
    return(
        <div className="helloWorld-clicked">
            <p className="helloWorld-name">
            {phrase}
            <span className="logicSpan" onPointerEnter={()=>setLogicHover(true)} onPointerLeave={()=>setLogicHover(false)}>
            {logic}
            </span></p>
        </div>
    )
}

export default ClickView;