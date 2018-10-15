export const showNotification = (id, time = 4000, meta = {}) => (dispatch) => {
  dispatch({
    type: '@@bcnotify/SHOW_NOTIFICATION',
    id,
    time,
    meta
  });
  if (time > 0) {
    setTimeout(() => {
      dispatch(clearNotification(id));
    }, time)
  }
};

export const clearNotification = id => (dispatch) => {
  dispatch({
    type: '@@bcnotify/CLEAR_NOTIFICATION',
    id,
  });
};
