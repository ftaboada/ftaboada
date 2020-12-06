import {Formularie, Input, TextArea, Title, Validator} from "./styles"
import {Span, Button} from "../../personalInfo/views/styles"

const Form=({displayForm, dark,  validEmail, validName, validMsg, handleEmail,handleName, handleMsg, disableButton})=>{
    return(
        
        <Formularie margin={!displayForm?"-3500px":"13vw"} opacity={displayForm?"1":"0"} color={dark?"#2c2c2c":"#cdcdcd"} delay={!displayForm?"0ms":"600ms"}>
        <Title>contact <Span>me</Span></Title>
        <Validator size="17px">I'll reach you soon</Validator>
        <Input placeholder="email..." onChange={handleEmail} ></Input>
        <Validator color={validEmail?"":"tomato"}>{!validEmail?"should be a valid one":"I like this one"}</Validator>
        <Input placeholder="name..." onChange={handleName}></Input>
        <Validator color={validName?"":"tomato"}>{validName?"a valid name please...":"I'm sure you're not Elon's Musk son"}</Validator>
        <TextArea placeholder="message..." onChange={handleMsg} ></TextArea>
        <Validator color={validMsg?"":"tomato"}>{!validMsg?"at least 2 lines":"that seems to be ok"}</Validator>
        <Button
        disabled={disableButton} 
        opacity={displayForm?"1":"0"}
        color={dark?"#3c3c3c":"#dfdff1"}
        bkColor={!dark?"#3c3c3c":"#dfdff1"}
        margin="0vw" 
        marginTop="57vh">Send</Button>
        </Formularie>
    )
}
export default Form;

