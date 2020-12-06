const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};
const isValidName = (name) => {
  return /^[a-zA-Z ]*$/.test(name);
};
const isValidMsg = (msg) => {
  return msg.length > 70 ? true : false;
};
export { isValidEmail, isValidName, isValidMsg };
