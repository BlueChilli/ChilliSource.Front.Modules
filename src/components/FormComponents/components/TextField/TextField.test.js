import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TextField from './index.js';
import { Field, reduxForm } from 'react-redux';

describe('TextField Test Cases', () => {
	it('should render Field correctly', () => {
		const textFieldWrapper = shallow(<TextField name="firstname" />);
		expect(textFieldWrapper.find('Field')).toHaveLength(1);
	});
});
