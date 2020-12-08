import React, { useState, useEffect } from "react";
import HelloWorld from "./helloWorld";
import PersonalInfo from "./personalInfo";
import Contact from "./contact";

const Container = () => {
  const [stage, setStage] = useState([true, false, false]);
  const [dark, setDark] = useState(false);
  const [bkColor, setBkColor] = useState("");
  useEffect(() => {
    document.title = "Felipe Taboada";
  }, []);
  return (
    <div>
      {stage[0] ? (
        <HelloWorld
          setStage={setStage}
          stage={stage}
          dark={dark}
          setDark={setDark}
        />
      ) : (
        <></>
      )}
      {stage[1] ? (
        <PersonalInfo
          dark={dark}
          setStage={setStage}
          bkColor={bkColor}
          setBkColor={setBkColor}
        />
      ) : (
        <></>
      )}
      {stage[2] ? (
        <Contact
          bkColor={bkColor}
          dark={dark}
          setDark={setDark}
          setStage={setStage}
          setBkColor={setBkColor}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Container;
