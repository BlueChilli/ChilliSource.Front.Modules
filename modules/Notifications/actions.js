export const showNotification = (id, text, level = 'success', time = 4000) => (dispatch) => {
  dispatch({
    type: '@@bcnotify/SHOW_NOTIFICATION',
    id,
    text,
    level,
    time,
  });
};

export const clearNotification = id => (dispatch) => {
  dispatch({
    type: '@@bcnotify/CLEAR_NOTIFICATION',
    id,
  });
};
