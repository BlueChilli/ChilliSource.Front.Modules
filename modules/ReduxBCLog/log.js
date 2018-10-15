export default (name, info = {}) => {
  return dispatch => {
    dispatch({
      type: "@@BCLog",
      payload: {name, info}
    })
  }

}