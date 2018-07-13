export const arrayFind = (array, id) => {
  return array.find(item => item.id === id);
};


export const arrayUpdate = (array, id, obj) => {
  return array.map(item => {
    if (item.id === id) {
      return {...item, ...obj}
    } else return item;
  });
};