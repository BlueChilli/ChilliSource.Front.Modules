const matchPassword = (val, allValues) => {
  if(val!==allValues.password)return "Passwords must match";

};
export default matchPassword;