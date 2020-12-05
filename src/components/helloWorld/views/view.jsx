import {useState} from "react"
import "./style.css"

const View = ({ msg, setClick, click, handleNext}) => {
  const [hover, setHover] = useState(false)
  const {pBeforeClick, pAfterClick, descOnHover, descOnHoverSpan , description, hello} = msg
  return (
    //this inline style should not bet here, it's just for you to know i get how to implement inline Syle
    <div  style={{ width: "100vw", height: "100vh", display:"flex", flexDirection:"column", justifyContent:"center" }}>
     
      <h1 className="helloWorld-h1tag" onPointerEnter={()=> setHover(true)} onPointerLeave={()=> setHover(false)} onClick={()=> setClick(!click)}>
      {hello}</h1>

      <p className="helloWorld-ptag">
      {!click?pBeforeClick:<span className="nextSpan" onClick={handleNext}>
      {pAfterClick}</span>}
      </p>
        

      {hover?<h2 className="helloWorld-name">
      {descOnHover}<span className="helloWorld-spantag">{descOnHoverSpan}</span>
      </h2>
      :
      <h2 className="helloWorld-name">
      {description}
      </h2>}
    </div>
  );
};
export default View;
