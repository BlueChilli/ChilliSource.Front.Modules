export default (state = {}, {type, id, meta}) => {

  switch (type) {
    case '@@bcmodal/SHOW_MODAL':
      return Object.assign({}, state, {
        [id]: {
          id, isOpen: true, meta
        }
      });
    case '@@bcmodal/HIDE_MODAL':
      return Object.assign({}, state, {
        [id]: {
          id, isOpen: false, meta
        }
      });
    default:
      return state;

  }
};
