export const showModal = (id, meta = {}) => (dispatch) => {
  return dispatch({
    type: '@@bcmodal/SHOW_MODAL',
    payload: {id, meta},

  });
};

export const hideModal = (id, meta = {}) => (dispatch) => {
  return dispatch({
    type: '@@bcmodal/HIDE_MODAL',
    payload: {id, meta},
  });
};
