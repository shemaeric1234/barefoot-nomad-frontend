import { createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer  from '../reducers/index';

const store= createStore(reducer );


   
export default store;