import {Formularie, Input, TextArea, Title, Validator} from "./styles"
import {Span, Button} from "../../personalInfo/views/styles"

const Form=({displayForm, dark,  validEmail, validName, validMsg, handleEmail,handleName, handleMsg, disableButton, handleSubmit})=>{
    return(
        
        <Formularie  onSubmit={handleSubmit} margin={!displayForm?"-3500px":"13vw"} opacity={displayForm?"1":"0"} color={dark?"#2c2c2c":"#cdcdcd"} delay={!displayForm?"0ms":"300ms"}>
        <Title>contact <Span>me</Span></Title>
        <Validator size="17px">I'll reach you soon</Validator>
        <Input name="email" placeholder="email..." onChange={handleEmail} ></Input>
        <Validator color={validEmail?"":"tomato"}>{!validEmail?"should be a valid one":"I like this one"}</Validator>
        <Input name="name" placeholder="name..." onChange={handleName}></Input>
        <Validator color={validName?"":"tomato"}>{validName?"a valid name please...":"I'm sure you're not Elon's Musk son"}</Validator>
        <TextArea name="msg" placeholder="message..." onChange={handleMsg} ></TextArea>
        <Validator color={validMsg?"":"tomato"}>{!validMsg?"at least 20 characters":"that seems to be ok"}</Validator>
        <Button
        disabled={disableButton} 
        opacity={displayForm?"1":"0"}
        color={dark?"#3c3c3c":"#dfdff1"}
        bkColor={!dark?"#3c3c3c":"#dfdff1"}
        margin={0} 
        marginTop={57}
        >Send</Button>
        </Formularie>
    )
}
export default Form;

