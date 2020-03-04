import React from 'react';
import { shallow, mount } from 'enzyme';
import { props } from '../../../../__mockData__/redux-mock-data';
import {
	UserProfile,
	mapStateToProps,
} from '../../../../src/components/profile/userProfile';

describe('user profile component', () => {
	it('should render the user profile  component successfully', () => {
		const wrapper = shallow(<UserProfile {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should have initial state', () => {
		const initState = {
			userProfileReducer: { UpdateduserProfileInfo: '' },
			NotificationReducer: { Notifications: [] },
		};
		expect(mapStateToProps(initState)).toBeDefined();
	});
});
