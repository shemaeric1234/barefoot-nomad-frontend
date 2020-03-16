import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	requestTrip,
	GetLocations,
	GetAccomodations,
} from '../../src/actions/tripRequestAction';
import moxios from 'moxios';
import axios from 'axios';
import expect from 'expect';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Trip Requests  actions', () => {
	beforeEach(() => {
		moxios.install(axios);
	});
	afterEach(() => {
		moxios.uninstall(axios);
	});
	it('should create one way trip successfully', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {
					status: 200,
					message: 'Trip Request Successfully created',
					data: '',
				},
			});
		});
		const store = mockStore({});
		return store
			.dispatch(requestTrip('1', '2', '7', '', '0788787273'))
			.then(() => {
				expect(store.getActions());
			});
	});
	it('should get accommodation from supported loacation', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 404,
				response: {
					status: 404,
					error: 'Trip Unsccessfully created',
				},
			});
		});
		const store = mockStore({});
		return store.dispatch(requestTrip('')).catch(() => {
			expect(store.getActions());
		});
	});
	it('should get accommodation from supported location', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 201,
				response: {
					status: 201,
					data: {
						data: [
							{ id: '1', name: 'marriot' },
							{ id: '1', name: 'marriot' },
						],
					},
				},
			});
		});
		const store = mockStore({});
		return store.dispatch(GetAccomodations('1')).then(() => {
			expect(store.getActions());
		});
	});
	it('should get accommodation from supported loacation', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 201,
				response: {
					status: 201,
					data: [{ id: '1', name: 'marriot' }],
				},
			});
		});
		const store = mockStore({});
		return store.dispatch(GetAccomodations('1')).then(() => {
			expect(store.getActions());
		});
	});
	it('should all get supported location', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 201,
				response: {
					status: 201,
					error: 'All Supported Locations',
				},
			});
		});
		const store = mockStore({});
		return store.dispatch(GetLocations('')).then(() => {
			expect(store.getActions());
		});
	});
});
