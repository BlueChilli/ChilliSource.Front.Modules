import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';

const initialState = fromJS({
  authenticated: false,
});

export default createReducer(initialState, {
  SESSION_LOGIN: (state, action) => state.set('authenticated', true),

  SESSION_LOGOUT: (state, action) => state.set('authenticated', false),

});
