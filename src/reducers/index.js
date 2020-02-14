import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import signupReducer from './signupReducer';
import appReducer from './appReducer';
import  passwordReducer from './passwordReducer';
import  activateUserReducer from './activateUserReducer';

export default combineReducers({
    appReducer,
    signInReducer,
    appReducer,
    passwordReducer,
    signupReducer,
    activateUserReducer
   });
