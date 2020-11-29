import React from 'react'


const Darkmode=({setDark, dark})=>{
    return(
        <button 
        className="helloworld-darkMode"
        onClick={()=>setDark(!dark)}
        style={dark?{color:"#cecece", backgroundColor:"#3f3f3f"}:{}}
        >{!dark?"OFF":"ON"}</button>
    )
}
export default Darkmode