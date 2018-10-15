import log from "../ReduxBCLog/log";

export const createSession = data => {
  return dispatch => {
    dispatch(log("account-sessioncreated", data));
    return dispatch(
      {
        type: "ACCOUNT/createsession",
        payload: data
      })
  }
};

export const deleteSession = data => {
  return dispatch => {
    dispatch(log("account-sessiondeleted", data));
    return dispatch(
      {
        type: "ACCOUNT/deletesession",
        payload: data
      })
  }
};