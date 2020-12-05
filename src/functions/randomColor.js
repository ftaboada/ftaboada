import IsValidHex from "../validators/isValidHex";

const RandomColor = (string) => {
  let loopStr = "";
  let hex = "#";
  if (string) {
    string = string.toUpperCase();
    const isValid = IsValidHex(string);
    if (isValid) {
      loopStr = string;
    } else {
      loopStr = false;
    }
  }
  if (!loopStr) {
    loopStr = "1234567890ABCDEF";
  }
  const strLen = loopStr.length;
  for (let i = 0; i < 6; i++) {
    hex += loopStr[Math.floor(Math.random() * strLen)];
  }
  return hex;
};
export default RandomColor;
