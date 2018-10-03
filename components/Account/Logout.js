/** Libraries */
import React from 'react';

/** Components */
import CenteredComponent from '../CenteredComponent';

/** Helpers */
import { logoutUser } from './actions';

/** Class Logout */
class Logout extends React.Component {
	componentDidMount() {
		logoutUser();
	}

	render() {
		return (
			<CenteredComponent>
				<h1>Logging out...</h1>
			</CenteredComponent>
		);
	}
}

export default Logout;
