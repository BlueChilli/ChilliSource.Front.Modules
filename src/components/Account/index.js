/** Libraries */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Components */
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import Manage from './Manage';
import AcceptInvite from './AcceptInvite';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';

/** Helpers */
import { requireAuthentication, doNotRequireAuthentication } from '../Auth';

/** Class Account */
class Account extends React.Component {
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/account/acceptInvite"
					component={doNotRequireAuthentication(AcceptInvite)}
				/>
				<Route exact path="/account/login" component={doNotRequireAuthentication(Login)} />
				<Route exact path="/account/register" component={doNotRequireAuthentication(Register)} />
				<Route exact path="/account/manage" component={requireAuthentication(Manage)} />
				<Route exact path="/account/logout" component={requireAuthentication(Logout)} />
				<Route
					exact
					path="/account/resetPassword"
					component={requireAuthentication(ResetPassword)}
				/>
				<Route
					exact
					path="/account/forgotPassword"
					component={requireAuthentication(ForgotPassword)}
				/>
				<Route exact path="/account/acceptInvite" component={requireAuthentication(AcceptInvite)} />
			</Switch>
		);
	}
}

export default Account;
export { Login, Register, Manage, Logout, AcceptInvite };
