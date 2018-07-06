import {createSelector} from 'reselect';
import get from 'lodash/get';
import isArray from "lodash/isArray";
import {connect} from "react-redux";

const accountState = state => state.account;

export const sessionExists = createSelector(accountState,
  accountState => accountState.sessionExists
);

export const hasRole = accountState => {
  return role => {
    const roles = get(accountState, "session.roles");
    if (isArray(roles)) {
      return roles.includes(role);
    } else return false;
  }
};

export const getName = createSelector(accountState,
  accountState => {
    const {firstName, lastName} = get(accountState, "session");
    return `${firstName} ${lastName}`;
  }
);

export const connectAccountState = () => {
  return connect(state => {
    return {
      account: {
        sessionExists: sessionExists(state),
        getName: getName(state),
        hasRole: hasRole(state.account)
      }
    }
  });
};