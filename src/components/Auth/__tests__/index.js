import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
	requireAuthentication,
	doNotRequireAuthentication,
	ProtectedComponent,
	UnProtectedComponent,
} from '../Auth';

const props = {
	isLoggedIn: false,
	roles: [],
	location: {
		pathname: '',
	},
	redirectTo: () => {},
};

const unAuthState = {
	Account: {
		isLoggedIn: false,
		roles: [],
		location: {
			pathname: '',
		},
		redirectTo: () => {},
	},
};

const authState = {
	Account: {
		isLoggedIn: false,
		roles: [],
		location: {
			pathname: '',
		},
		redirectTo: () => {},
	},
};

const reducer = (state, action) => state;

const unAuthStore = createStore(reducer, unAuthState);
const authStore = createStore(reducer, authState);

describe('Auth', () => {
	describe('ProtectedComponent', () => {
		it('Should not render anything when not logged in', () => {
			const wrapper = shallow(
				<ProtectedComponent {...props}>
					<div className="div" />
				</ProtectedComponent>
			);
			expect(wrapper.type()).toBe('noscript');
		});

		it('Should render div when logged in', () => {
			const wrapper = shallow(
				<ProtectedComponent {...props} isLoggedIn={true}>
					<div className="div" />
				</ProtectedComponent>
			);
			expect(wrapper.type()).toBe('div');
			expect(wrapper.find('.div')).toHaveLength(1);
		});
	});

	describe('UnProtectedComponent', () => {
		it('Should not render anything when not logged in', () => {
			const wrapper = shallow(
				<UnProtectedComponent {...props} isLoggedIn={true}>
					<div className="div" />
				</UnProtectedComponent>
			);
			expect(wrapper.type()).toBe('noscript');
		});

		it('Should render div when logged in', () => {
			const wrapper = shallow(
				<UnProtectedComponent {...props}>
					<div className="div" />
				</UnProtectedComponent>
			);
			expect(wrapper.type()).toBe('div');
			expect(wrapper.find('.div')).toHaveLength(1);
		});
	});

	describe('requireAuthentication', () => {
		it('Should return connect function', () => {
			const Component = requireAuthentication(
				<Provider store={authStore}>
					<div className="authenticated" />
				</Provider>
			);
			expect(Component.displayName).toBe('Connect(Component)');
		});

		it('Should throw an error', () => {
			expect(requireAuthentication).toThrowError(
				'requireAuthentication needs a component as argument'
			);
		});
	});

	describe('doNotRequireAuthentication', () => {
		it('Should return connect function', () => {
			const Component = doNotRequireAuthentication(
				<Provider store={authStore}>
					<div className="unAuthenticated" />
				</Provider>
			);
			expect(Component.displayName).toBe('Connect(Component)');
		});

		it('Should throw an error', () => {
			expect(doNotRequireAuthentication).toThrow(
				'doNotRequireAuthentication needs a component as argument'
			);
		});
	});

	describe('doNotRequireAuthentication', () => {});
});
