const findReplaceString = (string, find, replace) => {
  return string.replace(`{${find}}`, replace);
};

export default findReplaceString;