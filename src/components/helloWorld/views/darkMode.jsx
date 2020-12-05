import React from 'react'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import "./style.css"

const Darkmode=({setDark, dark})=>{
    return(
        <button className="helloworld-darkMode" onClick={()=>setDark(!dark)} style={dark?{color:"#cecece", backgroundColor:"#3f3f3f"}:{}}>
        <PowerSettingsNewIcon className="PowerButtonGlowing"/>
        </button>
    )
}
export default Darkmode