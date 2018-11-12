import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../Login';
import { LoginForm, _LoginForm } from '../forms';

describe('Login', () => {
	it('Should render LoginForm', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find(LoginForm)).toHaveLength(1);
	});

	describe('LoginForm', () => {
		it('Should render two fields and a button', () => {
			// LoginForm normally should render username/email and password
			// Submit button should render
			const LoginFormComponent = _LoginForm;
			const wrapper = shallow(<LoginFormComponent />);
			expect(wrapper.find('form').length).toBe(1);
			expect(wrapper.find('TextField').length).toBe(2);
			expect(wrapper.find('button').length).toBe(1);
		});

		it('Should have props called handleSubmit', () => {
			const LoginFormComponent = _LoginForm;
			const mockOnSubmit = jest.fn();
			const wrapper = shallow(<LoginFormComponent handleSubmit={mockOnSubmit} />);

			// Should have the handleSubmit props
			expect(wrapper.props().onSubmit).toBe(mockOnSubmit);

			// when clicking the button, it should call the handleSubmit method
			wrapper.find('form').simulate('submit');
			expect(mockOnSubmit).toHaveBeenCalledTimes(1);
		});
	});
});
