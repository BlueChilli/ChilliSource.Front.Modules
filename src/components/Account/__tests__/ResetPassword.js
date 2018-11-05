import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from '../ResetPassword';
import { ResetPasswordForm } from '../forms';

describe('Login Component', () => {
	it('Should render LoginForm', () => {
		const wrapper = shallow(<ResetPassword />);
		expect(wrapper.find(ResetPasswordForm)).toHaveLength(1);
	});

	// TODO: LoginForm test cases
});
