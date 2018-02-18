export const highlight = (group, id, time = 1500) => {
  return dispatch => dispatch({
    type: "HIGHLIGHT",
    payload: new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time)

    }),
    meta: {group, id}
  });
};