import React from 'react';
import { mount } from 'enzyme';
import Logout from '../Logout';
import { logoutUser } from '../actions';

describe('Login Component', () => {
	it('Should render LoginForm', () => {
		const componentDidMountSpy = jest.spyOn(Logout.prototype, 'componentDidMount');
		const wrapper = mount(<Logout />);
		expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
		expect(wrapper.find('h1')).toHaveLength(1);
	});

	it('Should render LoginForm', () => {
		// First mock the function componentDidMount and edit implementation;
		// then check if the mockLogoutUser has been called;
		const wrapper = mount(<Logout />);
		const mockLogoutUser = jest.fn(() => console.log('mocked'));
		const mockComponentDidMount = jest
			.fn(Logout.prototype.componentDidMount)
			.mockImplementation(() => {
				mockLogoutUser();
			});
		mockComponentDidMount();
		expect(mockLogoutUser.mock.calls.length).toBe(1);
	});
});
