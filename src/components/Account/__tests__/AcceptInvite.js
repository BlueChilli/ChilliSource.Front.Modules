import React from 'react';
import { _AcceptInvite, InvitationForm, _InvitationForm } from '../AcceptInvite';
import { shallow } from 'enzyme';

const mockProps = {
	location: {
		search: '/search',
	},
};

describe('Account index tests', () => {
	it('Should render correctly', () => {
		const AcceptInviiteComponent = _AcceptInvite;
		const wrapper = shallow(<AcceptInviiteComponent {...mockProps} />);
		expect(wrapper.find(InvitationForm)).toHaveLength(1);
	});

	describe('Invitation Form', () => {
		it('Should render the form correctly', () => {
			const InvitationFormComponent = _InvitationForm;
			const wrapper = shallow(<InvitationFormComponent />);
			expect(wrapper.find('form').length).toBe(1);
			expect(wrapper.find('TextField').length).toBeGreaterThan(1);
			expect(wrapper.find('button').length).toBe(1);
		});

		it('should set the props and invokes onSubmit function', () => {
			const InvitationFormComponent = _InvitationForm;
			const mockFn = jest.fn();
			const wrapper = shallow(<InvitationFormComponent handleSubmit={mockFn} />);
			expect(wrapper.props().onSubmit).toBe(mockFn);
			wrapper.find('form').simulate('submit');
			expect(mockFn).toHaveBeenCalledTimes(1);
		});
	});
});
