import styled from "styled-components";

const SwitchContainer = styled.div`
  height: 35px;
  width: 50px;
  position: absolute;
  margin-left: -90vw;
  margin-top: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  z-index: 100;
`;
const Bar = styled.div`
  height: 5px;
  width: 50px;
  border-radius: 3px;
  background-color: hotpink;
  display: block;
  box-shadow: 2px 1px 5px #000;
`;
const Ball = styled.div`
  height: 20px;
  width: 20px;
  margin-top: -15.7%;
  margin-left: ${(props) => props.margin};
  border-radius: 50%;
  background-color: #dfdfdf;
  box-shadow: 0px 3px 5px #000;
  transition: 300ms ease-in-out;
  &&:hover {
    box-shadow: 0px 0px 15px hotpink;
    cursor: pointer;
  }
`;

export { SwitchContainer, Bar, Ball };
//2px; 29PX;
