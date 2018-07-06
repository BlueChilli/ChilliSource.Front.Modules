import { createSelector } from 'reselect';
// import {List, Map} from "immutable";

const firebaseState = state => state.get('firebase') || new Map();

export default createSelector([firebaseState], state => ({
  isAuthenticated: state.getIn(['user', 'loggedIn']) === true,
  email: state.getIn(['user', 'email']),
}));
