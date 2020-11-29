import React, { useState } from "react";
import View from "./views/view";
import ClickView from "./views/clickView";
import DarkMode from "./views/darkMode";

const HelloWorld = ({ stage, setStage }) => {
  const [click, setClick] = useState(false);
  const [dark, setDark] = useState(false);
  const msg = {
    hello: "Hello World!",
    p: "This is my first Portfolio!!!",
    description: "my first steps was pure css ",
  };
  const handleNext = () => {
    setStage([false, true, false, false, false]);
  };
  return (
    <div
      style={
        dark
          ? { color: "white", backgroundColor: "#2c2c2c" }
          : { backgroundColor: "#fdfdfd" }
      }
    >
      <View
        msg={msg}
        click={click}
        setClick={setClick}
        handleNext={handleNext}
      />
      {click ? (
        <div>
          <ClickView />
          <DarkMode setDark={setDark} dark={dark} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default HelloWorld;
