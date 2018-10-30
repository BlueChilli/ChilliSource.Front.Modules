import React from 'react';
import { shallow, mount } from 'enzyme';
import CenteredComponent from '../index';

describe('Centered Component Tests', () => {
	it('should render correctly.', () => {
		const wrapper = shallow(
			<CenteredComponent>
				<div>This is testing</div>
			</CenteredComponent>
		);
		expect(wrapper.find('Container')).toHaveLength(1);
		expect(wrapper.find('Row')).toHaveLength(1);
		expect(wrapper.find('Col')).toHaveLength(1);
		expect(wrapper.find('div.center')).toHaveLength(0);
	});

	it('should render correctly.', () => {
		const wrapper = shallow(
			<CenteredComponent centerContent>
				<div>This is testing</div>
			</CenteredComponent>
		);
		expect(wrapper.find('div.center')).toHaveLength(1);
	});
});
