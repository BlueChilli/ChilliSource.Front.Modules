import {createReducer} from 'redux-create-reducer';

const initialState = {
  sessionExists: false
};


export const account = createReducer(initialState, {
  'ACCOUNT/createsession'(state, action) {
    return {...state, session: action.payload, sessionExists: true}
  }
});

export default account;