const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};
const isValidName = (name) => {
  return /^[a-zA-Z ´'ñ^Ñ%]*$/.test(name);
};
const isValidMsg = (msg) => {
  return msg.length > 20 ? true : false;
};
export { isValidEmail, isValidName, isValidMsg };
