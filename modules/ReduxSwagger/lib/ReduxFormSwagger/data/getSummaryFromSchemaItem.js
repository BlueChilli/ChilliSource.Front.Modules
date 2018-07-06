export const getSummaryFromSchemaItem = (schemaItem, name = undefined) => {
  let metaInfo = makeObjectFromSchemaItem(schemaItem);
  metaInfo["_schemaItem"] = schemaItem;
  metaInfo["name"] = name;

  return metaInfo;
};

const makeObjectFromSchemaItem = schemaItem => {

  // declare schema intepreters
  const schemaInterpreters = [
    toplevel_dynamic('name'),
    toplevel_dynamic('title'),
    toplevel_dynamic('type'),
    toplevel_dynamic('properties'),
    toplevel_dynamic('format'),
    toplevel_dynamic_asFeature('format'),
    validation_maxLength,
    validation_minLength,
    validation_xsysEmailAddress,
    validation_xsysRequired,
    validation_xsysCompare,
    validation_xblueFileMaxSize,
    validation_xblueHttpPostedFileBaseFileExtensions,
    validation_xblueRequiredIf,
    datatype_xsysDataType,
    datatype_xblueapiresourceref,
    datatype_xblueapiresourcerefArray,
    datatype_xblueenumdefs,
    datatype_xbluePhoneNumber
  ];

  // run all interpreters against schemaItem object
  const arrayOfInterpretedSchemaItems = schemaInterpreters.map(f => f(schemaItem)).filter(v => v !== undefined);

  // Flatten array into an object
  let flattedObject = {validations: [], features: []};

  arrayOfInterpretedSchemaItems.forEach(item => {
    Object.entries(item).forEach(itemElement => {

      const itemKey = itemElement[0];
      const itemVal = itemElement[1];

      switch (itemKey) {
        case "validation":
          flattedObject.validations.push(itemVal);
          break;
        case "feature":
          flattedObject.features.push(itemVal);
          break;
        default:
          flattedObject[itemKey] = itemVal;
          break;
      }
    });
  });

  return flattedObject;

};

// topLevel functions
const validation_maxLength = schemaItem => {
  if (schemaItem['maxLength'] !== undefined) {
    return {
      validation: {maxLength: schemaItem['maxLength']},
      feature: "maxLength:" + schemaItem['maxLength'],
      size: schemaItem['maxLength']
    }
  }
};

const validation_minLength = schemaItem => {
  if (schemaItem['minLength'] !== undefined) {
    return {
      validation: {minLength: schemaItem['minLength']},
      feature: "minLength: " + schemaItem['minLength']
    }
  }
};

const toplevel_dynamic = topLevelName => {

  return schemaItem => {
    if (schemaItem[topLevelName] !== undefined) {
      return {[topLevelName]: schemaItem[topLevelName]}
    }
  }
};

const toplevel_dynamic_asFeature = topLevelName => {

  return schemaItem => {
    if (schemaItem[topLevelName] !== undefined) {
      return {feature: `${topLevelName}:${schemaItem[topLevelName]}`}
    }
  }
};


// validation functions
const validation_xsysEmailAddress = schemaItem => {
  if (schemaItem['x-sys-EmailAddress'] !== undefined) {
    return {
      validation: "email",
      feature: "email"
    }
  }
};


//x-blue-FileMaxSize
const validation_xblueFileMaxSize = schemaItem => {
  if (schemaItem['x-blue-FileMaxSize'] !== undefined) {
    return {
      validation: {fileMaxSize: schemaItem['x-blue-FileMaxSize'].maxSize},
      feature: `fileMaxSize:${schemaItem['x-blue-FileMaxSize'].maxSize}`
    }
  }
};


//x-blue-HttpPostedFileBaseFileExtensions
const validation_xblueHttpPostedFileBaseFileExtensions = schemaItem => {
  if (schemaItem['x-blue-HttpPostedFileBaseFileExtensions'] !== undefined) {
    return {
      validation: {fileMaxSize: schemaItem['x-blue-HttpPostedFileBaseFileExtensions']},
      feature: `fileExtensions:${schemaItem['x-blue-HttpPostedFileBaseFileExtensions'].extensions}`
    }
  }
};

//x-blue-RequiredIf
const validation_xblueRequiredIf = schemaItem => {
  if (schemaItem['x-blue-RequiredIf'] !== undefined) {
    return {
      validation: {requiredIf: schemaItem['x-blue-RequiredIf']},
      feature: `requiredIf`
    }
  }
};


const validation_xsysRequired = schemaItem => {
  if (schemaItem['x-sys-Required'] !== undefined) {
    return {
      validation: "required",
      feature: "required"
    }
  }
};

//x-sys-Compare
const validation_xsysCompare = schemaItem => {
  if (schemaItem['x-sys-Compare'] !== undefined) {
    return {
      validation: {compareWith: schemaItem['x-sys-Compare'].otherProperty},
      compareWith: schemaItem['x-sys-Compare'].otherProperty,
      feature: `Match with ${schemaItem['x-sys-Compare'].otherProperty}`
    }
  }
};

// datatype functions
const datatype_xsysDataType = schemaItem => {
  if (schemaItem['x-sys-DataType'] !== undefined) {
    return {
      datatype: schemaItem['x-sys-DataType'].dataType.toLowerCase(),
      feature: "datatype:" + schemaItem['x-sys-DataType'].dataType.toLowerCase()
    }
  }
};


//x-blue-PhoneNumber
// datatype functions
const datatype_xbluePhoneNumber = schemaItem => {
  if (schemaItem['x-blue-PhoneNumber'] !== undefined) {
    return {
      datatype: schemaItem['x-blue-PhoneNumber'],
      feature: "datatype:PhoneNumber"
    }
  }
};


//x-blue-ApiResourceReference
const datatype_xblueapiresourceref = schemaItem => {
  if (schemaItem['x-blue-ApiResourceReference'] !== undefined) {
    const {resourceName} = schemaItem['x-blue-ApiResourceReference'];
    return {
      resourceReference: resourceName,
      feature: `API resource refs:(${resourceName})`
    }
  }
};

//x-blue-ApiResourceReference (inside array)
// usually associated with an array type
const datatype_xblueapiresourcerefArray = schemaItem => {
  if (schemaItem['items'] !== undefined) {
    const items = schemaItem['items'];
    const {type} = items;

    const resourceReference = items['x-blue-ApiResourceReference'] ?
      items['x-blue-ApiResourceReference'].resourceName : undefined;

    return {
      arrayOf: {
        type,
        resourceReference
      },
      feature: `Wants array of resource refs: <${type}> ${resourceReference}`
    }
  }
};

// x-blue-enum-definitions
// the enum type isn't addressed, currently in this file
const datatype_xblueenumdefs = schemaItem => {
  if (schemaItem['x-blue-enum-definitions'] !== undefined) {
    return {
      choices: schemaItem['x-blue-enum-definitions'],
      feature: "Baked in ENUM definitions"
    }
  }
};