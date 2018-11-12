import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from '../ResetPassword';
import { ResetPasswordForm, _ResetPasswordForm } from '../forms';

describe('ResetPassword Component', () => {
	it('Should render LoginForm', () => {
		const wrapper = shallow(<ResetPassword />);
		expect(wrapper.find(ResetPasswordForm)).toHaveLength(1);
	});

	describe('ResetPasswordForm Component', () => {
		it('should render correctly as a form', () => {
			const ResetPasswordFormComponent = _ResetPasswordForm;
			const wrapper = shallow(<ResetPasswordFormComponent />);
			expect(wrapper.find('form')).toHaveLength(1);
			expect(wrapper.find('TextField').length).toBeGreaterThan(1);
			expect(wrapper.find('button').length).toBe(1);
		});

		it('should set props and call the onSubmit function', () => {
			const ResetPasswordFormComponent = _ResetPasswordForm;
			const mockFn = jest.fn();
			const wrapper = shallow(<ResetPasswordFormComponent handleSubmit={mockFn} />);

			expect(wrapper.props().onSubmit).toBe(mockFn);
			wrapper.find('form').simulate('submit');
			expect(mockFn).toHaveBeenCalledTimes(1);
		});
	});
});
