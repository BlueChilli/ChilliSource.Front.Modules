const guessFieldType = (summaryObject) => {

  const t = summaryObject.type;


  // Scenarios
  if (summaryObject.resourceReference) {
    return evaluateAsResourceReference(summaryObject);
  }

  if (summaryObject.choices && t !== "array") {
    return "DropDownSelectSingle";
  }

  switch (t) {
    case "string":
      return evaluateAsStringType(summaryObject);
    case "boolean":
      return "CheckBox";
    case "array":
      return evaluateAsArrayType(summaryObject);
    case "integer":
    case "number":
      return evaluateAsIntType(summaryObject);
    case "file":
      return evaluateAsFileType(summaryObject);
    default:
      return "Unknown";
  }


};


const evaluateAsStringType = summaryObject => {
  const size = summaryObject.size || 10;

  if (summaryObject.datatype === "password") {
    return "Password";
  }


  return size < 499 ? "Text" : "TextBox";

};

const evaluateAsIntType = summaryObject => {
  return "Number";
};

const evaluateAsArrayType = summaryObject => {
  return "MultiSelect";
};

const evaluateAsFileType = summaryObject => {
  return "UploadSingle";
};


const evaluateAsResourceReference = summaryObject => {
  return "DropDownSelectSingle"
};

export default guessFieldType;
