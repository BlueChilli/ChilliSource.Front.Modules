/** Libraries */
import React from 'react';
import { Route } from 'react-router-dom';

/** Components */
import SwaggerView from './SwaggerView';

/** Class View */
class View extends React.Component {
	render() {
		return <Route exact path="/swagger" component={SwaggerView} />;
	}
}

export default View;
