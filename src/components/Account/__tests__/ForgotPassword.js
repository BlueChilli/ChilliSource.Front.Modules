import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from '../ForgotPassword';
import { ForgotPasswordForm, _ForgotPasswordForm } from '../forms';

describe('ForgotPassword', () => {
	it('Should render ForgotPasswordForm', () => {
		const wrapper = shallow(<ForgotPassword />);
		expect(wrapper.find(ForgotPasswordForm)).toHaveLength(1);
	});

	describe('ForgotPasswordForm Component', () => {
		it('Should render form correctly', () => {
			const ForgotPasswordFormComponent = _ForgotPasswordForm;
			const wrapper = shallow(<ForgotPasswordFormComponent />);
			expect(wrapper.find('form').length).toBe(1);
			expect(wrapper.find('TextField').length).toBeGreaterThan(0);
			expect(wrapper.find('button').length).toBe(1);
		});

		it('Should set the props and calls the submit function', () => {
			const ForgotPasswordFormComponent = _ForgotPasswordForm;
			const mockFn = jest.fn();
			const wrapper = shallow(<ForgotPasswordFormComponent handleSubmit={mockFn} />);
			expect(wrapper.props().onSubmit).toBe(mockFn);
			wrapper.find('form').simulate('submit');
			expect(mockFn).toHaveBeenCalledTimes(1);
		});
	});
});
