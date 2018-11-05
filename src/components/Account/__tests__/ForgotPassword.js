import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from '../ForgotPassword';
import { ForgotPasswordForm } from '../forms';

describe('ForgotPassword', () => {
	it('Should render ForgotPasswordForm', () => {
		const wrapper = shallow(<ForgotPassword />);
		expect(wrapper.find(ForgotPasswordForm)).toHaveLength(1);
	});

	// TODO: ForgotPasswordForm test cases
});
