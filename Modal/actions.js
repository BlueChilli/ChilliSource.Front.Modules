export const showModal = (id, meta) => (dispatch) => {
  return dispatch({
    type: '@@bcmodal/SHOW_MODAL',
    id,
    meta
  });
};

export const hideModal = id => (dispatch) => {
  return dispatch({
    type: '@@bcmodal/HIDE_MODAL',
    id,
  });
};
