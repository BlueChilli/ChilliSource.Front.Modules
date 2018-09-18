/** Libraries */
import React from 'react';
import { Mod } from 'chillifront';
import { Switch, Route } from 'react-router-dom';

/** Components */
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import AcceptInvite from './AcceptInvite';
import Manage from './Manage';

/** Helpers */
import { requireAuthentication, doNotRequireAuthentication } from '../Auth';

/** Class Account */
class Account extends React.Component {
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/user/acceptInvite"
					component={doNotRequireAuthentication(AcceptInvite)}
				/>
				<Route exact path="/user/login" component={doNotRequireAuthentication(Login)} />
				<Route exact path="/user/register" component={doNotRequireAuthentication(Register)} />
				<Route exact path="/user/manage" component={requireAuthentication(Manage)} />
				<Route exact path="/user/logout" component={requireAuthentication(Logout)} />
			</Switch>
		);
	}
}

/** Class Account */
class AccountMod extends Mod {
	name() {
		return 'Account';
	}

	reducers() {
		const initialState = {
			userKey: undefined,
			firstName: undefined,
			lastName: undefined,
			fullName: undefined,
			email: undefined,
			status: undefined,
			roles: [],
			profilePhotoPath: undefined,
			impersonator: undefined,
		};

		const reducer = (state = initialState, action) => {
			switch (action.type) {
				case 'USER_LOGGED_IN': {
					return { ...state, ...action.payload };
				}

				case 'USER_LOGGED_OUT': {
					return initialState;
				}

				case 'UPDATE_EMAIL': {
					return { ...state, email: action.payload };
				}

				case 'UPDATE_PROFILE_DETAILS': {
					return { ...state, ...action.payload };
				}

				default:
					return state;
			}
		};

		return {
			Account: reducer,
		};
	}
}

export default AccountMod;
export { Account, Login, Register, Manage, Logout, AcceptInvite };
