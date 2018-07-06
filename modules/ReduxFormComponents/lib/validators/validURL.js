const vurl = require('valid-url');

const validURL = value => {
  if (vurl.isUri(value)) return undefined; else return "Must be a valid URL";
};

export default validURL;