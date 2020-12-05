import React from 'react'
import "./style.css"

const PopOver = ({msg})=>{
const {popHover} = msg;
return (
    <div className="helloWorld-popHover">
       <p className="helloWorld-popHoverP">{popHover}</p>
    </div>
)
}
export default PopOver;