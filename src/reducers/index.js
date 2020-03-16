import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import signupReducer from './signupReducer';
import appReducer from './appReducer';
import passwordReducer from './passwordReducer';
import activateUserReducer from './activateUserReducer';
import userProfileReducer from './user.profile.reducer';
import tripRequestsReducers from './trip_requests/tripRequestsReducers';
import UserSettingReducer from './UserSettingReducer';
import tripRequestCommentsReducer from './trip_requests/commentsReducers';
import NotificationReducer from './notification.reducer';
import userManagementReducer from './userManagementReducers';
import tripRequestReducer from './tripRequestReducer';

export default combineReducers({
	appReducer,
	signInReducer,
	appReducer,
	passwordReducer,
	signupReducer,
	activateUserReducer,
	userProfileReducer,
	tripRequestsReducers,
	UserSettingReducer,
	tripRequestCommentsReducer,
	NotificationReducer,
	userManagementReducer,
	tripRequestReducer,
});
