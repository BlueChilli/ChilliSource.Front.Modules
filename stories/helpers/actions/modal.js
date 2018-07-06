export const showModal = (id, meta = {}) => {
  return {
    type: '@@bcmodal/SHOW_MODAL',
    id,
    meta
  };
};

export const hideModal = id => {
  return {
    type: '@@bcmodal/HIDE_MODAL',
    id,
  };
};
