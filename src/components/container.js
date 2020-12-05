import React, { useState } from "react";
import HelloWorld from "./helloWorld";
import PersonalInfo from "./personalInfo";

const Container = () => {
  const [stage, setStage] = useState([true, false, false, false, false]);
  const [dark, setDark] = useState(false);

  return (
    <div
      syle={
        dark
          ? {
              backgroundColor: "#2c2c2c",
              height: "100vh",
              width: "100vw",
              display: "block",
            }
          : {}
      }
    >
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
      {stage[1] ? <PersonalInfo dark={dark} setStage={setStage} /> : <></>}
    </div>
  );
};

export default Container;
