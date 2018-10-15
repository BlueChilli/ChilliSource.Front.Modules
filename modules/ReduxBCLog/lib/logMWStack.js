let mwStack = [];

export const addlogMWStack = (o) => {
  mwStack.push(o);
};

export const getlogMWStack = () => mwStack;