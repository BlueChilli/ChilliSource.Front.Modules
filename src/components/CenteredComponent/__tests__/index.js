import React from 'react';
import { shallow, mount } from 'enzyme';
import CenteredComponent from '../index';

describe('Centered Component Tests', () => {
	// regardless of whatever it is
	// this component should render Container, Row, Col
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

	// the content should display in the center which means
	// div class "center" should render
	it('the content should be in the middle.', () => {
		const wrapper = shallow(
			<CenteredComponent centerContent>
				<div>This is testing</div>
			</CenteredComponent>
		);
		expect(wrapper.find('div.center')).toHaveLength(1);
	});
});
