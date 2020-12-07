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
  transition: 300ms ease-in-out;
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
  @media (max-width: 900px) {
    margin-right: 0px;
    margin-left: -80vw;
  }
`;
const FormContainer = styled.div`
  width: ${(props) => props.width + "vw"};
  position: absolute;
  height: 100vh;
  transition: 500ms;
  margin-left: 70vw;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    width: ${(props) => props.width * 2 + "vw"};
    margin-left: 40vw;
  }
  @media (max-width: 600px) {
    width: ${(props) => Math.floor(props.width * 3.334) + "vw"};
    margin-left: 0vw;
  }
`;
const Formularie = styled.form`
  position: absolute;
  opacity: ${(props) => props.opacity};
  margin-right: ${(props) => props.margin};
  transition: 300ms ease-in;
  transition-delay: ${(props) => props.delay};
  color: ${(props) => props.color};
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1300px) {
    align-items: center;
    margin-right: 0px;
  }
`;
const Input = styled.input`
  margin: 10px 0px;
  width: 15vw;
  z-index: 1110;
  @media (max-width: 1300px) {
    width: 40vw;
  }
`;
const TextArea = styled.textarea`
  margin: 10px 0px;
  width: 15vw;
  height: 12.5vw;
  z-index: 1110;
  @media (max-width: 1300px) {
    width: 40vw;
    height: 20vh;
  }
`;
const Title = styled.h1`
  display: block;
  transition: 300ms;
`;
const Validator = styled.p`
  display: block;
  font-size: ${(props) => props.size || "14px"};
  color: ${(props) => props.color};
  transition: 300ms;
`;
const Pop = styled.h2`
  position: absolute;
  display: block;
  width: 250px;
  margin-top: -85vh;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bkColor};
  padding: 10px 25px;
  font-weigth: 500;
  z-index: 110;
  border-radius: 8px 0px 0px 0px;
  transition: 300ms;
  text-align: center;
`;
const Decor = styled.div`
  position: inherit;
  display: block;
  background-color: tomato;
  height: 3px;
  margin-left: -25px;
  margin-top: 7px;
  transition: 5000ms;
  transition-delay: 100ms;
  width: 100%;
  filter: drop-shadow(0px 0px 15px tomato);
  z-index: 120;
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
  Pop,
  Decor,
};
