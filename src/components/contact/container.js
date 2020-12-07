import React, { useState, useEffect } from "react";
import View from "./views/view";
import { isValidEmail, isValidName, isValidMsg } from "../../validators/forms";
import emailjs from "emailjs-com";

const Contact = ({ bkColor, dark, setDark, setStage, setBkColor }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [email, setValidMail] = useState(false);
  const [name, setValidName] = useState(true);
  const [msg, setValidMsg] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [len, setLen] = useState(0);
  const [showPopOver, setShowPopOver] = useState({ msg: null, state: false });
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDisplayForm(true);
    }
  }, []);
  useEffect(() => {
    if (email && name && msg && len > 0) {
      setDisableButton(false);
    }
  }, [msg, name, email]);
  const handleEmail = (e) => {
    setValidMail(isValidEmail(e.target.value));
  };
  const handleName = (e) => {
    setValidName(isValidName(e.target.value));
    setLen(e.target.value.length);
  };
  const handleMsg = (e) => {
    setValidMsg(isValidMsg(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //prettier-ignore
    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_API_KEY
      ).then(
        (result) => {
          setShowPopOver({msg:"sent message", state:true})
        },
        (error) => {
          setShowPopOver({msg:"ups. message not sent"})
        }
      );
    setTimeout(() => {
      return setShowPopOver({ msg: null, state: false });
    }, 5000);
    e.target.reset();
  };
  return (
    <View
      bkColor={bkColor}
      dark={dark}
      setStage={setStage}
      displayForm={displayForm}
      setDisplayForm={setDisplayForm}
      validEmail={email}
      validName={name}
      validMsg={msg}
      handleEmail={handleEmail}
      handleName={handleName}
      handleMsg={handleMsg}
      disableButton={disableButton}
      setDark={setDark}
      setBkColor={setBkColor}
      handleSubmit={handleSubmit}
      showPopOver={showPopOver}
    />
  );
};

export default Contact;
