import {useState} from "react"
import "./style.css"

const View = ({ msg, setClick, click, handleNext}) => {
  const [hover, setHover] = useState(false);
 
  return (
    //this inline style should not bet here, it's just for you to know i get how to implement inline Syle
    <div  style={{ width: "100vw", height: "100vh", display:"flex", flexDirection:"column", justifyContent:"center" }}>
      <h1 className="helloWorld-h1tag" onPointerEnter={()=> setHover(true)} onPointerLeave={()=> setHover(false)} onClick={()=> setClick(!click)}>{msg.hello}</h1>
      <p className="helloWorld-ptag">{!click?msg.p:
      <span
      className="nextSpan"
      onClick={handleNext}
      >
      click to continue my journey!</span>}</p>
    {//conditional rendering, onHover H1
    }
      {hover?<h2 className="helloWorld-name">{msg.description}<span className="helloWorld-spantag">style</span></h2>:<h2 className="helloWorld-name">I'm Felipe Taboada</h2>}
    </div>
  );
};
export default View;
