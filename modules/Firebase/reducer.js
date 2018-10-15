import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';
import { Map, toJS } from 'immutable';

const initialState = new Map({
  user: Map(),
});

export default createReducer(initialState, {
  '@@fb/UPDATEUSERDATA': (state, { payload }) => {
    if (payload === null) {
      return state.set('user', Map({
        loggedIn: false,
      }));
    }
    const pl = payload.toJSON();
    console.log('p', payload.toJSON());
    return state.set('user', Map({
      loggedIn: true,
      displayName: pl.displayName,
      email: pl.email,
      emailVerified: pl.emailVerified,
      uid: pl.uid,
      isAnonymous: pl.isAnonymous,
      lastLoginAt: pl.lastLoginAt,
      phoneNumber: pl.phoneNumber,
      photoURL: pl.photoURL,
    }));
  },

});
