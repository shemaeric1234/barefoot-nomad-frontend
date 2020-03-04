import React from 'react';
import { shallow, mount } from 'enzyme';
import { NavLinks } from '../../../../src/components/profile/Nav.links';

describe('Top navigation bar component', () => {
	it('should render the top navigation bar  component successfully', () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoibXVqb2huMjVAZ21haWwuY29tIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWQiOjF9LCJpYXQiOjE1ODIyNDI0OTEsImV4cCI6MTU4MjMyODg5MX0.S_GO2R1kNZJrro5NbJOjO4S0UfBfhLaF-QtoiOUlmDo';
		localStorage.setItem('token', token);
		const wrapper = shallow(<NavLinks />);
		wrapper.instance().changeBgColor();
		const buttonState = wrapper.state().bgcolor;
		expect(buttonState).toBe('#F1F1F1');
	});
	it('should handle onclick event of trips link', () => {
		const wrapper = shallow(<NavLinks />);
		// window.location.pathname = '/user/user-role-setting';
		wrapper.setState({ role: 'admin' });
		wrapper.find('#trips').simulate('click');
		const location = wrapper.state().location;
		expect(location).toBe('/trips');
	});
	it('should handle onclick event of profile link', () => {
		const wrapper = shallow(<NavLinks />);
		wrapper.find('#profile').simulate('click');
		const location = wrapper.state().location;
		expect(location).toBe('/profile');
	});
});
