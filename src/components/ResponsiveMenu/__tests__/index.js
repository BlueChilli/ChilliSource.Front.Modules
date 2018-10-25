import React from 'react';
import { shallow, mount } from 'enzyme';
import MediaQuery from 'react-responsive';
import { ResponsiveMenu, MenuItem, SubMenu } from '../';
import { BrowserRouter, NavLink } from 'react-router-dom';

describe('Responsive Menu Testing', () => {
	it('should render correctly', () => {
		const responsiveMenuWrapper = shallow(<ResponsiveMenu breakpoint={768} />);
		expect(responsiveMenuWrapper.find(MediaQuery)).toHaveLength(1);
	});

	it('should have 768px for breakpoint by default', () => {
		const responsiveMenuWrapper = mount(<ResponsiveMenu />);
		expect(responsiveMenuWrapper.prop('breakpoint')).toBe(768);
	});

	it('should be able to set custom value for breakpoint', () => {
		const responsiveMenuWrapper = mount(<ResponsiveMenu breakpoint={960} />);
		expect(responsiveMenuWrapper.prop('breakpoint')).toBe(960);
	});

	it('should have right_align class when right_align prop is true', () => {
		const responsiveMenuWrapper = mount(<ResponsiveMenu rightAlign={true} />);
		expect(responsiveMenuWrapper.find('.right_align')).toHaveLength(1);
	});

	it('should have at least one item', () => {
		const responsiveMenuWrapper = shallow(
			<BrowserRouter>
				<ResponsiveMenu>
					<MenuItem to="/dashboard" label="Dashboard" />
				</ResponsiveMenu>
			</BrowserRouter>
		);
		expect(responsiveMenuWrapper.find(MenuItem)).toHaveLength(1);
	});

	it('MenuItem should render li and navlink correctly', () => {
		const menuItemWrapper = shallow(<MenuItem to="/dashboard" label="Dashboard" />);
		expect(
			menuItemWrapper.containsAllMatchingElements([
				<li>
					<NavLink to="/dashboard">Dashboard</NavLink>
				</li>,
			])
		).toEqual(true);
	});

	beforeEach(() => {
		const subMenuWrapper = mount(<SubMenu label="Dropdown" />);
		subMenuWrapper.setState({ extended: false });
	});

	it('should change state after clicking on span', () => {
		const subMenuWrapper = mount(<SubMenu label="Dropdown" />);
		subMenuWrapper.find('span').simulate('click');
		expect(subMenuWrapper.state('extended')).toBe(true);
	});

	it('should not render dropdown before clicking', () => {
		const subMenuWrapper = mount(<SubMenu label="Dropdown" />);
		expect(subMenuWrapper.find('ul.navbar__submenu_dropdown')).toHaveLength(0);
	});

	it('should render dropdown after clicking', () => {
		const subMenuWrapper = mount(<SubMenu label="Dropdown" />);
		subMenuWrapper.find('span').simulate('click');
		expect(subMenuWrapper.find('ul.navbar__submenu_dropdown')).toHaveLength(1);
	});
});
