export const inline = (id, text, level = 'success', time = 4000) => (dispatch) => {
  dispatch({
    type: '@@bcnotify/SHOW_NOTIFICATION',
    id,
    text,
    level,
    time,
  });
};

export const clear = id => (dispatch) => {
  dispatch({
    type: '@@bcnotify/CLEAR_NOTIFICATION',
    id,
  });
};
