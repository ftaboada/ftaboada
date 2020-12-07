import React from 'react'
import {SwitchContainer, Bar, Ball} from "../../../style";
import randomColor from "../../../functions/randomColor"
const DarkSwitch=({dark, setDark, setBkColor})=>{
    const handleClick=()=>{
        setDark(!dark)
        setBkColor(randomColor(!dark?"2314":"ACDF"))
    }
    return(
        <SwitchContainer>
        <Bar>
        <Ball onClick={handleClick} margin={!dark?"0px":"30px"}></Ball>
        </Bar>
        </SwitchContainer>        
    )
}
export default DarkSwitch;