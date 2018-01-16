import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';

const initialState = fromJS({
  Date: new Date(),
});

export default createReducer(initialState, {
  MY_TEST_ACTION: (state, action) => state.set('Date', new Date()),

});
