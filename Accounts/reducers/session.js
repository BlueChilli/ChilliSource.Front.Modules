import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';

const initialState = fromJS({
  Date: new Date(),
});

export default createReducer(initialState, {
  LOGIN: (state, action) => state.set('authenticated', true),

  LOGOUT: (state, action) => state.set('authenticated', false),

});
