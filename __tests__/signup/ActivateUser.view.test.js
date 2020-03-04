import React from 'react';
import { mount } from 'enzyme';
import {
	ActivateUser,
	mapStateToProps,
} from '../../src/views/signup/activate_user.view.jsx';
describe('Render Activate user view', () => {
	it('should render activate user successfully', async () => {
		mapStateToProps({
			activateUserReducer: {
				isActivated: false,
				activateMessage: false,
				hasRequestMade: false,
			},
			appReducer: {
				isLoading: false,
			},
		});

		mount(<ActivateUser isLoading={true} />);
		mount(<ActivateUser isLoading={false} />);
	});
});
