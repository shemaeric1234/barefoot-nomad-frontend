import { combineReducers } from 'redux' ;
import signInReducer from './signInReducer';
import appReducer from './appReducer';
import  passwordReducer from './passwordReducer';

export default combineReducers({
    signInReducer,
    appReducer,
    passwordReducer
   });