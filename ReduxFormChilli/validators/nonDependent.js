if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}


export const alwaysFail = (value) => {
  return "Field set to always fail :)";
};

export const required = value => {
  if(Array.isArray(value)){
    return (value.length>0 ? undefined : "Required");
  }
  return (value ? undefined : "Required");
};

export const matchWithPassword = (value, formData) => {
  if (formData.get("password") !== value) {
    return "passwords don't match";
  }
  return undefined;
};


export const ml5 = value => {
  if (value === undefined) value = "";
  return value.length < 5 ? "Must have a minimum length of 5" : undefined;
};

export const minLength = length => {
  return function ml5(value) {
    if (value === undefined) value = "";
    return value.length < length ? "Must have a minimum length of " + length : undefined;
  };
};

export const maxLength = length => value => (value.length > length ? `Must have a maximum length of ${length}` : undefined);
