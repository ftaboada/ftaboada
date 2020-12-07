import { useState, useEffect } from "react";
import RandomColor from "../../functions/randomColor";
import View from "./views/view";

const PersonalInfo = ({ dark, setStage, bkColor, setBkColor }) => {
  const [side, setSide] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [imgOp, setImgOp] = useState(0);
  const [popOver, setPopOver] = useState(false);
  const [delay, setDelay] = useState("300ms");
  const [close, setClose] = useState(false);

  useEffect(() => {
    changeBkColor();
    setOpacity(1);
    setImgOp(!side ? 1 : 0);
    setDelay("300ms");
  }, [side]);
  const changeBkColor = () => {
    if (dark) {
      setBkColor(RandomColor("1234"));
    } else {
      setBkColor(RandomColor("ACDF"));
    }
  };
  const nextStage = async () => {
    setClose(true);
    await setTimeout(() => {
      setStage([false, false, true]);
    }, 400);
  };
  return (
    <View
      backgroundColor={bkColor}
      changeBkColor={changeBkColor}
      side={side}
      setSide={setSide}
      color={dark ? "#efefef" : "#3c3c3c"}
      dark={dark}
      opacity={opacity}
      imgOp={imgOp}
      setPopOver={setPopOver}
      popOver={popOver}
      setStage={setStage}
      delay={delay}
      setDelay={setDelay}
      close={close}
      nextStage={nextStage}
    />
  );
};

export default PersonalInfo;
