import styled from "styled-components";

const ContactContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms;
  background-color: ${(props) => props.bkColor};
`;
const BackButton = styled.button`
  width: 28px;
  height: 19px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 5px #1c1c1c;
  transition: 300ms;
  background-color: ${(props) => props.bkColor};
  color: ${(props) => props.color};
  cursor: pointer;
  position: absolute;
  align-self: flex-start;
  margin-right: ${(props) => props.margin};
  margin-top: 30px;
  padding: 2px 10px;
  z-index: 100;
  &:hover {
    color: ${(props) => props.bkColor};
    background-color: ${(props) => props.color};
  }
`;
const FormContainer = styled.div`
  width: ${(props) => props.width};
  position: absolute;
  height: 100vh;
  transition: 500ms;
  margin-left: 70vw;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  &&:hover {
    Span {
      color: "tomato";
    }
  }
`;
const Formularie = styled.form`
  position: absolute;
  opacity: ${(props) => props.opacity};
  margin-right: ${(props) => props.margin};
  transition: 300ms;
  transition-delay: ${(props) => props.delay};
  color: ${(props) => props.color};
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
`;
const Input = styled.input`
  margin: 10px 0px;
  width: 15vw;
`;
const TextArea = styled.textarea`
  margin: 10px 0px;
  width: 15vw;
  height: 12.5vw;
`;
const Title = styled.h1`
  display: block;
`;
const Validator = styled.p`
  display: block;
  font-size: ${(props) => props.size || "14px"};
  color: ${(props) => props.color};
  transition: 300ms;
`;
export {
  ContactContainer,
  BackButton,
  FormContainer,
  Formularie,
  Input,
  TextArea,
  Title,
  Validator,
};
