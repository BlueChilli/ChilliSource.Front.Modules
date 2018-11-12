import React from 'react';
import { shallow } from 'enzyme';
import Register from '../Register';
import { RegisterForm, _RegisterForm } from '../forms';

describe('Register Component', () => {
	// Register Component
	it('Should render RegisterForm', () => {
		const wrapper = shallow(<Register />);
		expect(wrapper.find(RegisterForm)).toHaveLength(1);
	});

	// RegistrationForm Component
	describe('RegistrationForm Component', () => {
		it('Should render things correctly', () => {
			const RegisterFormComponent = _RegisterForm;
			const wrapper = shallow(<RegisterFormComponent />);

			// It should be a form
			// Because sometimes, we might want only username and password
			// Button should exist
			expect(wrapper.find('form').length).toBe(1);
			expect(wrapper.find('TextField').length).toBeGreaterThan(1);
			expect(wrapper.find('button').length).toBe(1);
		});

		it('Should set the handleSubmit Props', () => {
			const RegisterFormComponent = _RegisterForm;
			const mockFn = jest.fn();
			const wrapper = shallow(<RegisterFormComponent handleSubmit={mockFn} />);

			// form should have onSubmit function
			expect(wrapper.props().onSubmit).toBe(mockFn);

			// mockFn should have been called when form is submitted
			wrapper.find('form').simulate('submit');
			expect(mockFn).toHaveBeenCalledTimes(1);
		});
	});
});
