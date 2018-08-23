/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

/** Helpers */
const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return Object.assign({}, ownProps, stateProps, dispatchProps);
};

const mapStateToProps = state => {
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
		props.redirectTo(`/user/login?next=${path}`);
	}
};

const checkUnauth = props => {
	if (props.isLoggedIn) {
		props.redirectTo('/worker-profile');
	}
};

export const requireAuthentication = component => {
	class ProtectedComponent extends React.Component {
		state = {};

		static getDerivedStateFromProps(props) {
			checkAuth(props);
			return null;
		}

		render() {
			const { isLoggedIn, redirectTo, ...remainingProps } = this.props;

			if (isLoggedIn) {
				return React.createElement(component, remainingProps);
			}

			return <noscript />;
		}
	}

	return connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	)(ProtectedComponent);
};

export const doNotRequireAuthentication = component => {
	class UnProtectedComponent extends React.Component {
		state = {};

		static getDerivedStateFromProps(props) {
			checkUnauth(props);
			return null;
		}

		render() {
			const { isLoggedIn, redirectTo, ...remainingProps } = this.props;

			if (!isLoggedIn) {
				return React.createElement(component, remainingProps);
			}

			return <noscript />;
		}
	}

	return connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	)(UnProtectedComponent);
};
