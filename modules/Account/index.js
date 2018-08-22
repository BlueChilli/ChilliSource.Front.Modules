/** Libraries */
import React from 'react';
import { Mod } from 'chillifront';
import { Switch, Route } from 'react-router-dom';

/** Components */
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import Manage from './Manage';

/** Helpers */
import { requireAuthentication, doNotRequireAuthentication } from '../Auth';

/** Class Account */
class Account extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/user/acceptInvite" component={doNotRequireAuthentication(Register)} />
				<Route exact path="/user/login" component={doNotRequireAuthentication(Login)} />
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
			impersonator: undefined,
			companyId: undefined,
			companyName: undefined,
			email: undefined,
			profilePhotoPath: undefined,
			roles: [],
			status: undefined,
		};

		const reducer = (state = initialState, action) => {
			switch (action.type) {
				case 'USER_LOGGED_IN': {
					return { ...state, ...action.payload };
				}

				case 'LOGOUT_USER': {
					return initialState;
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
export { Account, Login, Register, Manage, Logout };
