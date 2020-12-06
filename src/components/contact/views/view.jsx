import React from 'react'
import Three from './three/view'
import {ContactContainer, BackButton, FormContainer} from "./styles"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Form from "./form"

const View=({bkColor, dark, setStage, displayForm, setDisplayForm, validEmail, validName, validMsg, handleEmail,handleName, handleMsg, disableButton})=>{
    
    return (
        <ContactContainer bkColor={bkColor}>
        <BackButton bkColor={dark?"#3c3c3c":"#cfcfcf"}
            color={dark?"#cfcfcf":"#3c3c3c"}
            onClick={()=> setStage([false, true, false])}
            margin="95vw"
            >
        <ArrowBackIosIcon style={{fontSize:"16px"}}/>
        </BackButton>
        <Three setDisplayForm={setDisplayForm} displayForm={displayForm} dark={dark} bkColor={bkColor}/>
        <FormContainer width={displayForm?"30vw":"0px"} color={!dark?"#3c3c3c":"#dfdff1"}>
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
             />
        </FormContainer>
        </ContactContainer>
    )
}
export default View
