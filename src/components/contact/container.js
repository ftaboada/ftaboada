import React, { useState, useEffect } from "react";
import View from "./views/view";
import { isValidEmail, isValidName, isValidMsg } from "../../validators/forms";

const Contact = ({ bkColor, dark, setStage }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [validEmail, setValidMail] = useState(false);
  const [validName, setValidName] = useState(true);
  const [validMsg, setValidMsg] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [len, setLen] = useState(0);

  useEffect(() => {
    if (validEmail && validName && validMsg && len > 0) {
      setDisableButton(false);
    }
  }, [validMsg, validName, validEmail]);
  const handleEmail = (e) => {
    setValidMail(isValidEmail(e.target.value));
  };
  const handleName = (e) => {
    setValidName(isValidName(e.target.value));
    setLen(e.target.value.length);
  };
  const handleMsg = (e) => {
    setValidMsg(isValidMsg(e.target.value));
    setLen(e.target.value.length);
  };
  return (
    <View
      bkColor={bkColor}
      dark={dark}
      setStage={setStage}
      displayForm={displayForm}
      setDisplayForm={setDisplayForm}
      validEmail={validEmail}
      validName={validName}
      validMsg={validMsg}
      handleEmail={handleEmail}
      handleName={handleName}
      handleMsg={handleMsg}
      disableButton={disableButton}
    />
  );
};

export default Contact;
