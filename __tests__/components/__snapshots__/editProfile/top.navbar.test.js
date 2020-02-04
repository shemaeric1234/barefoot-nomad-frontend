import React from 'react';
import { shallow } from 'enzyme';
import TopNavBar from '../../../../src/components/profile/top.nav.bar';

describe('Top navigation bar component', () => {
	it('should render the top navigation bar  component successfully', () => {
		const wrapper = shallow(<TopNavBar />);
		expect(wrapper).toMatchSnapshot();
	});
});
