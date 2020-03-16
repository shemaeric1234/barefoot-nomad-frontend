import React from 'react';
import { shallow, mount } from 'enzyme';
import { TripRequest, mapStateToProps } from '../../src/views/triprequest.view';
import sinon from 'sinon';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { props } from '../../__mockData__/tripRequest-mock-data';
import reducer from '../../src/reducers/index';

import { Provider } from 'react-redux';

const middlewares = [thunk];
const testStore = state => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(
		createStore,
	);
	return createStoreWithMiddleware(reducer, state);
};
const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = shallow(<TripRequest {...props} store={store} />);
	return wrapper;
};

describe('Trip Request component tests', () => {
	it('should render successfully all breaks found in Trip Request view page', () => {
		const wrapper = shallow(<TripRequest />);
		expect(wrapper.find('br').length).toBe(1);
	});

	it('should handle change successfully', () => {
		const component = setUp();
		component.setState({
			index: 2,
			submitted: false,
			reason: '',
			accomodationId: '',
			From: '',
			To: '2',
			type: 'one way',
			departureDate: ``,
		});
		component
			.find('Connect(WithStyles(OneWayForm))')
			.props()
			.onHandleChange({
				target: { name: 'From', value: '3' },
			});
		expect(component.state('From')).toEqual('3');
	});
	it('should handle destination change when departure and destination are different', () => {
		const component = setUp();
		component.setState({
			index: 2,
			submitted: false,
			reason: '',
			accomodationId: '',
			From: '3',
			To: '',
			type: 'one way',
			departureDate: ``,
		});
		component
			.find('Connect(WithStyles(OneWayForm))')
			.props()
			.onHandleChange({ target: { name: 'To', value: '1' } });
		expect(component.state('To')).toEqual('1');
	});
	it('should return empty value of destination when departure and destination are the same', () => {
		const component = setUp();
		component.setState({
			index: 2,
			submitted: false,
			reason: '',
			accomodationId: '',
			From: '1',
			To: '',
			type: 'one way',
			departureDate: ``,
		});
		component
			.find('Connect(WithStyles(OneWayForm))')
			.props()
			.onHandleChange({ target: { name: 'To', value: '1' } });
		expect(component.state('To')).toEqual('');
	});
	it('should handle departureDate change successfully', () => {
		const component = setUp();
		component
			.find('Connect(WithStyles(OneWayForm))')
			.props()
			.onHandleChange({
				target: {
					name: 'departureDate',
					value: 'Mon Mar 09 2020 16:38:51 GMT+0200 (Central Africa Time)',
				},
			});
		expect(component.state('departureDate')).toEqual(
			'Mon Mar 09 2020 16:38:51 GMT+0200 (Central Africa Time)',
		);
	});
	it('should simulate that onclick button has been clicked on round trip', () => {
		const component = setUp();
		component.setState({
			index: 1,
			submitted: false,
			reason: '',
			accomodationId: '',
			From: '',
			To: '',
			type: 'one way',
			departureDate: `${new Date(2013, 0, 2)}`,
		});
		component
			.find('WithStyles(ForwardRef(Button))')
			.at(1)
			.props()
			.onClick();
	});
	it('should simulate that onclick button has been clicked on one way trip', () => {
		const component = setUp();
		component.setState({
			index: 0,
			submitted: false,
			reason: '',
			accomodationId: '',
			From: '',
			To: '',
			type: 'one way',
			departureDate: `${new Date(2013, 0, 2)}`,
		});
		component
			.find('WithStyles(ForwardRef(Button))')
			.at(1)
			.props()
			.onClick();
	});
	it('should handle handle departure date change  successfully', () => {
		const component = setUp();
		component.setState({
			index: 1,
			submitted: false,
			reason: '',
			accomodationId: '',
			From: '',
			To: '',
			type: 'one way',
			departureDate: ``,
		});
		component
			.find('Connect(WithStyles(OneWayForm))')
			.props()
			.handleChangeDepartureDate(
				'Mon Mar 09 2020 16:38:51 GMT+0200 (Central Africa Time)',
			);
		expect(component.state('departureDate')).toEqual(
			'Mon Mar 09 2020 16:38:51 GMT+0200 (Central Africa Time)',
		);
	});
	it('should handle onclick change of accommodationId', () => {
		const component = setUp();
		component
			.find('Connect(AdsPictures)')
			.at(1)
			.props()
			.onClick(10);
		expect(component.state('accomodationId')).toEqual(10);
	});
	it('should handle change of tab index successfully', () => {
		const component = setUp();
		component.setState({
			index: 1,
			submitted: false,
			reason: '',
			accomodationId: '',
			From: '',
			To: '',
			type: 'one way',
			departureDate: '',
		});
		const handleChangeSpy = jest.spyOn(
			component.instance(),
			'handleIndexChange',
		);
		component
			.find('[data-test="index"]')
			.props()
			.onChange('', 2);
		expect(handleChangeSpy).toBeDefined();
		expect(component.state('index')).toEqual(2);
	});
	it('should map state to props', () => {
		const state = props;
		const stateObject = mapStateToProps(state);
		expect(stateObject).toBeTruthy();
	});
});
