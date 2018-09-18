// This is incomplete, doesn't work.

const tickedArray = value => {

  if (value === undefined) return undefined;
  let trueCount = 0;
  Object.keys(value).forEach(key => {
    //console.log(value[key]);
    if (value[key] === true) trueCount++;
  });

  return undefined;
  //console.log("validation", trueCount === 0 ? undefined : "Please tick one");

  return trueCount === 0 ? undefined : "Please tick one";

};

export default tickedArray;