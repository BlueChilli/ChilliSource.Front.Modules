import isEmail from "validator/lib/isEmail";

export const email = value => {
  if (value === undefined) return;
  return isEmail(value) ? undefined : "Needs to be a valid email address";
};