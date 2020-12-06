import React, { useState } from "react";
import View from "./views/view";
import ClickView from "./views/clickView";
import DarkMode from "./views/darkMode";
import PopOver from "./views/popOver";

const HelloWorld = ({ stage, setStage, dark, setDark }) => {
  const [click, setClick] = useState(false);
  const [logicHover, setLogicHover] = useState(false);

  const msg = {
    hello: "Hello World!",
    pBeforeClick: "This is my first Profile!!!",
    pAfterClick: "then I realized...There is no limits",
    description: "I'm Felipe Taboada",
    descOnHover: "my first steps was pure css.",
    descOnHoverSpan: "style",
    phrase: "and a little of ",
    logic: "logic",
    popHover: "conditional rendering, and a sense of a project structure",
  };

  const handleNext = () => {
    setStage([false, true, false]);
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
      {
        //above the main view fullscreen. bottom little divs, absolute position overlap.
        click ? (
          <div>
            <ClickView msg={msg} setLogicHover={setLogicHover} />
            <DarkMode setDark={setDark} dark={dark} />
          </div>
        ) : (
          <></>
        )
      }
      {logicHover ? <PopOver msg={msg} /> : <></>}
    </div>
  );
};
export default HelloWorld;
