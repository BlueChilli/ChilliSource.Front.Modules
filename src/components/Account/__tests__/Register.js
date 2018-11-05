import React from 'react';
import { shallow } from 'enzyme';
import Register from '../Register';
import { RegisterForm } from '../forms';

describe('Register Component', () => {
	it('Should render RegisterForm', () => {
		const wrapper = shallow(<Register />);
		expect(wrapper.find(RegisterForm)).toHaveLength(1);
	});

	// TODO: RegisterForm test cases
});
