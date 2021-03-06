import styled from "styled-components";

const Card = styled.div`
  height: 50vh;
  width: 50vh;
  box-shadow: 0px 0px 75px ${(props) => props.shadow};
  opacity: ${(props) => props.opacity};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  background-color: ${(props) => props.bkColor};
  transition: 300ms;
  z-index: 10;
  &&:hover {
    background-color: ${(props) => props.hoverBkColor};
    cursor: pointer;
    box-shadow: 0px 0px 175px ${(props) => props.shadow};
    Span {
      color: tomato;
    }
  }
  @media (max-height: 810px) {
    height: 60vh;
    width: 60vh;
  }
  @media (max-height: 700px) {
    height: 70vh;
    width: 70vh;
  }
  @media (max-height: 600px) {
    height: 80vh;
    width: 80vh;
  }
`;
const CardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms;
  background-color: ${(props) => props.bkColor};
  color: ${(props) => props.color};
`;
const GitLink = styled.a`
  opacity: ${(props) => props.opacity};
  color: ${(props) => props.color};
  text-decoration: none;
  text-align: justify;
  align-self: flex-start;
  position: absolute;
  margin-top: 40vh;
  margin-left: 35px;
  transition: 250ms;
  &&:hover {
    filter: drop-shadow(0px 0px 10px ${(props) => props.color});
  }
  @media (max-height: 700px) {
    margin-top: 60vh;
  }
`;
const Info = styled.p`
  opacity: ${(props) => props.opacity};
  font-size: smaller;
  text-align: justify;
  position: ${(props) => props.position}||inherit;
  margin-top: ${(props) => props.marginTop};
  width: 80%;
  transition: 300ms;
  transition-delay: 250ms;
  @media (max-height: 700px) {
    margin-top: ${(props) =>
      props.marginTop !== "3vh;"
        ? props.marginTop === "-25vh;"
          ? "-40vh"
          : "30vh"
        : "30vh"};
  }
`;
const Img = styled.img`
  opacity: ${(props) => props.opacity};
  transition: 300ms;
  transition-delay: 0.3s;
  rotate: 2.7deg;
  border-radius: 50%;
  margin-top: -44.51vh;
  -webkit-margin-before: -22.51vh;
  height: 133px;
  width: 133px;
  position: absolute;
  object-fit: cover;
  @media (max-height: 700px) {
    margin-top: -22vh;
    -webkit-margin-before: -10.51vh;
  }
`;
const Title = styled.h1`
  display: block;
  font-size: 23px;
  position: ${(props) => props.position}||inherit;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "vh" : "0px")};
  opacity: ${(props) => props.opacity};
  transition: 300ms;
  transition-delay: 300ms;
  @media (max-height: 700px) {
    margin-top: ${(props) =>
      props.marginTop ? props.marginTop - 20 + "vh" : "-20vh"};
  }
`;
const Span = styled.span`
  font-style: italic;
  transition: 250ms;
`;
const Button = styled.button`
  font-size: 13.5px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 5px #1c1c1c;
  transition: 300ms;
  opacity: ${(props) => props.opacity};
  background-color: ${(props) => props.bkColor};
  color: ${(props) => props.color};
  cursor: pointer;
  position: absolute;
  align-self: flex-end;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "vh" : "40vh")};
  margin-right: ${(props) => (props.margin ? props.margin + "px" : "15px")};
  @media (max-width: 900px) {
    margin-top: ${(props) => props.marginTop || "40vh"};
    margin-right: ${(props) =>
      props.margin ? props.margin + 30 + "px" : "15px"};
  }
  @media (max-height: 700px) {
    margin-top: ${(props) => (props.marginTop === 57 ? "80vh" : "60vh")};
  }
  @media (max-height: 600px) {
    margin-top: ${(props) => (props.marginTop === 57 ? "90vh" : "60vh")};
  }
  padding: 5px 10px;
  &&:hover {
    color: ${(props) => props.bkColor};
    background-color: ${(props) => props.color};
  }
`;
const Logo = styled.img`
  height: 55px;
  width: 55px;
  object-fit: ${(props) => props.fit};
  transition: 300ms;
  transition-delay: ${(props) => props.delay};
  opacity: ${(props) => props.opacity};
  filter: grayscale(100%) brightness(115%);

  &&:hover {
    filter: grayscale(0%) brightness(100%)
      drop-shadow(0px 0px 15px ${(props) => props.shadow});
  }
`;
const LogosContainer = styled.picture`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  align-self: center;
`;
const PopOver = styled.p`
  background-color: antiquewhite;
  color: #303030;
  font-size: 12px;
  position: absolute;
  align-self: flex-start;
  padding: 2px 3px;
  border: solid 1px #303030;
  border-radius: 3px;
  margin-top: 33vh;
  margin-left: 65px;
  transition: 250ms;
  z-index: 100;
  @media (max-height: 700px) {
    margin-top: 53vh;
  }
`;
const BackButton = styled.button`
  width: 35px;
  height: 17px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 5px #1c1c1c;
  transition: 300ms;
  background-color: ${(props) => props.bkColor};
  color: ${(props) => props.color};
  cursor: pointer;
  position: absolute;
  align-self: flex-start;
  margin-top: -35vh;
  margin-left: 35px;
  padding: 2px 3px;
  &&:hover {
    color: ${(props) => props.bkColor};
    background-color: ${(props) => props.color};
  }
  @media (max-height: 700px) {
    margin-top: -60vh;
  }
`;
export {
  Card,
  CardContainer,
  GitLink,
  Info,
  Img,
  Title,
  Span,
  Button,
  Logo,
  LogosContainer,
  PopOver,
  BackButton,
};
