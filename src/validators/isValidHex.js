const IsValidHex = (str) => {
  if (/^[0-9A-F]*$/.test(str)) {
    return true;
  }
  return false;
};

export default IsValidHex;
