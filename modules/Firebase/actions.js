import { push } from 'react-router-redux';
import { ModStack } from 'chillifront';

export const login = (email, password) => {};

export const register = (email, password) => (
  dispatch,
  getState,
  getFirebase,
) => {
  dispatch(ModStack.getActionByID('Notificiations/clear')('registerForm'));
  const firebase = getFirebase();
  return dispatch({
    type: 'REGISTER',
    payload: firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(success => dispatch(push('/fbaccount/registercomplete')))
      .catch((error) => {
        const notifyInline = ModStack.getActionByID('Notificiations/inline');
        return dispatch(notifyInline('registerForm', error.message));
      }),
  });
};

export const checkIfEmailExists = email => (
  dispatch,
  getState,
  getFirebase,
) => dispatch({
  type: 'REGISTER/CHECKEMAILEXISTS',
  payload: getFirebase()
    .auth()
    .fetchProvidersForEmail(email)
    .then(p => !p === 'password'),
});

export const updateUserData = () => (dispatch, getState, getFirebase) => dispatch({
  type: '@@fb/UPDATEUSERDATA',
  payload: getFirebase().auth().currentUser,
});

export const signIn = (email, password) => (
  dispatch,
  getState,
  getFirebase,
) => dispatch({
  type: '@@fb/SIGNIN',
  payload: getFirebase()
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(foo => dispatch(push('/')))
    .catch((error) => {
      console.log('error', error);
      const notifyInline = ModStack.getActionByID('Notificiations/inline');
      return dispatch(notifyInline('signinForm', error.message));
    }),
});

export const signOut = () => (dispatch, getState, getFirebase) => dispatch({
  type: '@@fb/SIGNOUT',
  payload: getFirebase()
    .auth()
    .signOut(),
});
