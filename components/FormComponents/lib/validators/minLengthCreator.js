const minLengthcreator = length => {
  return function minLength(value) {
    if (value === undefined) value = "";
    return value.length < length ? "Must have a minimum length of " + length : undefined;
  };
};

export default minLengthcreator;