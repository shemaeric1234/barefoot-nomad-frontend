import { combineReducers } from 'redux' ;
import signInReducer from './signInReducer';
import appReducer from './appReducer';

export default combineReducers({
    signInReducer,
    appReducer
   });