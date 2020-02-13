import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import signupReducer from './signupReducer';
import appReducer from './appReducer';
import passwordReducer from './passwordReducer';
import activateUserReducer from './activateUserReducer';
import userProfileReducer from './user.profile.reducer';
import tripRequestsReducers from './trip_requests/tripRequestsReducers';
import  UserSettingReducer from './UserSettingReducer';

export default combineReducers({
	appReducer,
	signInReducer,
	appReducer,
	passwordReducer,
	signupReducer,
	activateUserReducer,
	userProfileReducer,
	tripRequestsReducers,
    UserSettingReducer
});
