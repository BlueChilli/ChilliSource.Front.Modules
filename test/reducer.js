import { createReducer } from 'redux-immutablejs';
import { Map } from 'immutable';

export default createReducer(Map(), {
  MY_TEST_ACTION: (state, payload) => state.set('text', payload),
});
