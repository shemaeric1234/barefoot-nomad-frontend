import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
	OneWayForm,
	mapStateToProps,
} from '../../src/components/trip-request/oneWay.jsx';
import { TripRequest } from '../../src/views/triprequest.view';
import { props } from '../../__mockData__/tripRequest-mock-data';
import reducer from '../../src/reducers/index';

const middlewares = [thunk];
const testStore = state => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(
		createStore,
	);
	return createStoreWithMiddleware(reducer, state);
};
const setUpComponent = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = shallow(<OneWayForm {...props} store={store} />);
	return wrapper;
};
describe('Trip requests Form component tests', () => {
	it('should count div used throughout the form', () => {
		const wrapper = setUpComponent();
		expect(wrapper.find('div').length).toBe(1);
	});
	it('should map state to props', () => {
		const state = props;
		const stateObject = mapStateToProps(state);
		expect(stateObject).toBeTruthy();
	});
});
