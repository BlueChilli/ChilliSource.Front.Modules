/** Libraries */
import React from 'react';
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

export default Account;
export { Login, Register, Manage, Logout, AcceptInvite };
