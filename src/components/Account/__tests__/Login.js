import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';
import { LoginForm } from '../forms';

describe('Login', () => {
	it('Should render LoginForm', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find(LoginForm)).toHaveLength(1);
	});

	// TODO: LoginForm test cases
});
