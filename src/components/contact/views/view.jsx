import React from 'react'
import Three from './three/view'
import {ContactContainer, BackButton, FormContainer, Pop, Decor} from "./styles"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DarkSwitch from "./darkSwitch";
import Form from "./form"


const View=({bkColor, dark, setStage, displayForm, setDisplayForm, validEmail, validName, validMsg, handleEmail,handleName, handleMsg, disableButton, setDark,setBkColor, handleSubmit, showPopOver,})=>{
    
    return (
        <ContactContainer bkColor={bkColor}>
        <BackButton bkColor={dark?"#3c3c3c":"#cfcfcf"}
            color={dark?"#cfcfcf":"#3c3c3c"}
            onClick={()=> setStage([false, true, false])}
            margin="95vw"
            >
       
        <ArrowBackIosIcon style={{fontSize:"16px"}}/>
        </BackButton>
        <DarkSwitch dark={dark} setDark={setDark} setBkColor={setBkColor}/>
        {showPopOver.state?<Pop bkColor={!dark?"#3c3c3c":"#cfcfcf"} color={dark?"#3c3c3c":"#cfcfcf"}>{showPopOver.msg} <Decor></Decor></Pop>:<></>}
        <Three setDisplayForm={setDisplayForm} displayForm={displayForm} dark={dark} bkColor={bkColor}/>
        <FormContainer width={displayForm?30:0} color={!dark?"#3c3c3c":"#dfdff1"}>
            <Form
            displayForm={displayForm}
            setDisplayForm={setDisplayForm}
            dark={dark}
            validEmail={validEmail}
            validName={validName}
            validMsg={validMsg}
            handleEmail={handleEmail}
            handleName={handleName}
            handleMsg={handleMsg}    
            disableButton={disableButton}
            handleSubmit={handleSubmit}
             />
        </FormContainer>
        </ContactContainer>
    )
}
export default View
