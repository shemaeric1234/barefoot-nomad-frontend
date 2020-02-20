import React from 'react';
import { shallow } from 'enzyme';
import { NavLinks } from '../../../../src/components/profile/Nav.links';

describe('Top navigation bar component', () => {
	it('should render the top navigation bar  component successfully', () => {
		const wrapper = shallow(<NavLinks />);
		wrapper.instance().changeBgColor();
		const buttonState = wrapper.state().bgcolor;
		expect(buttonState).toBe('#F1F1F1');
	});
});
