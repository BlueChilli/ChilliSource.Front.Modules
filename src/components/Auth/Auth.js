/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

/** Helpers */
const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return Object.assign({}, ownProps, stateProps, dispatchProps);
};

export const mapStateToProps = state => {
	return {
		isLoggedIn: state.Account.email ? true : false,
		roles: state.Account.roles,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		redirectTo: path => dispatch(push(path)),
	};
};

const checkAuth = props => {
	if (!props.isLoggedIn) {
		let path = props.location.pathname;

		if (path.indexOf('logout') < 0) {
			props.redirectTo(`/account/login?next=${path}`);
		} else {
			props.redirectTo(`/account/login`);
		}
	}
};

const checkUnauth = props => {
	if (props.isLoggedIn) {
		if (props.roles.indexOf('Administrator') >= 0 || props.roles.indexOf('administrator') >= 0) {
			window.location.href = window.location.href.replace(props.location.pathname, '/admin');
		} else {
			if (typeof props.redirectTo === 'function') {
				props.redirectTo('/dashboard');
			} else {
				// fail silently
				console.warn('redirectTo is not a function');
			}
		}
	}
};

export class UnProtectedComponent extends React.Component {
	state = {};

	static getDerivedStateFromProps(props) {
		checkUnauth(props);
		return null;
	}

	render() {
		const { children, isLoggedIn, redirectTo, ...remainingProps } = this.props;

		if (!isLoggedIn) {
			return React.cloneElement(children, remainingProps);
		}

		return <noscript />;
	}
}

export class ProtectedComponent extends React.Component {
	state = {};

	static getDerivedStateFromProps(props) {
		checkAuth(props);
		return null;
	}

	render() {
		const { children, isLoggedIn, redirectTo, ...remainingProps } = this.props;

		if (isLoggedIn) {
			return React.cloneElement(children, remainingProps);
		}

		return <noscript />;
	}
}

export const requireAuthentication = component => {
	if (!component) {
		throw 'requireAuthentication needs a component as argument';
	}

	return connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	)(props => <ProtectedComponent {...props}>{component}</ProtectedComponent>);
};

export const doNotRequireAuthentication = component => {
	if (!component) {
		throw 'doNotRequireAuthentication needs a component as argument';
	}

	return connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	)(props => <UnProtectedComponent {...props}>{component}</UnProtectedComponent>);
};
