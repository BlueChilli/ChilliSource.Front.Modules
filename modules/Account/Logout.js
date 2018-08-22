/** Libraries */
import React from 'react';

/** Components */
import { CenteredComponent } from '../CenteredComponent';

/** Helpers */
// Uncomment this line below and fix the import path
// import { logoutUser } from 'UPDATE_IMPORT_PATH_HERE';

// Delete the line below after fixing the import path just above this
const loginUser = () => console.log('logoutUser > This is a dummy action.');

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
