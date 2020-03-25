import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
	getUserTripRequestsAction,
	setSelectedTripRequestAction,
} from '../../src/actions/requests/tripRequestsAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Trip requests actions tests', () => {
	beforeEach(() => {
		moxios.install();
		store.clearActions();
	});
	afterEach(() => {
		moxios.uninstall();
	});
	it('should get all user trip requests', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {
					data: {
						id: 1,
						origin: 'Kigali',
						destination: 'Kincasa',
						tripId: 'b4c99c41-9d2a-42f1-9a4c-65111d48e0d4',
						tripTripId: 2,
						tripType: 'one way',
						status: 'pending',
						accomodation: 'fgfghftjghv',
						departureDate: '2020-09-12T00:00:00.000Z',
						returnDate: '2020-02-01T22:00:00.000Z',
						createdAt: '2020-02-19T19:58:30.638Z',
						manager: {
							firstName: 'Dominique',
							lastName: 'Nsengimana',
						},
					},
				},
			});
		});
		await store.dispatch(getUserTripRequestsAction({})).then(async () => {
			const calledActions = store.getActions();
			expect(calledActions[0]).toEqual({ type: 'LOADING', payload: true });
		});
	});
	it('should set selected trip request', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {
					data: {
						id: 1,
						origin: 'Kigali',
						destination: 'Kincasa',
						tripId: 'b4c99c41-9d2a-42f1-9a4c-65111d48e0d4',
						tripTripId: 2,
						tripType: 'one way',
						status: 'pending',
						accomodation: 'fgfghftjghv',
						departureDate: '2020-09-12T00:00:00.000Z',
						returnDate: '2020-02-01T22:00:00.000Z',
						createdAt: '2020-02-19T19:58:30.638Z',
						manager: {
							firstName: 'Dominique',
							lastName: 'Nsengimana',
						},
					},
				},
			});
		});
		await store
			.dispatch(
				setSelectedTripRequestAction(
					[
						{
							id: 1,
							origin: 'Kigali',
							destination: 'Kincasa',
							tripId: 'b4c99c41-9d2a-42f1-9a4c-65111d48e0d4',
							tripTripId: 2,
							tripType: 'one way',
							status: 'pending',
							accomodation: 'fgfghftjghv',
							departureDate: '2020-09-12T00:00:00.000Z',
							returnDate: '2020-02-01T22:00:00.000Z',
							createdAt: '2020-02-19T19:58:30.638Z',
							manager: {
								firstName: 'Dominique',
								lastName: 'Nsengimana',
							},
						},
					],
					'b4c99c41-9d2a-42f1-9a4c-65111d48e0d4',
				),
			)
			.then(async () => {
				const calledActions = store.getActions();
				expect(calledActions[0]).toEqual({
					type: 'SET_SELLECTED_TRIP',
					payload: [
						{
							id: 1,
							origin: 'Kigali',
							destination: 'Kincasa',
							tripId: 'b4c99c41-9d2a-42f1-9a4c-65111d48e0d4',
							tripTripId: 2,
							tripType: 'one way',
							status: 'pending',
							accomodation: 'fgfghftjghv',
							departureDate: '2020-09-12T00:00:00.000Z',
							returnDate: '2020-02-01T22:00:00.000Z',
							createdAt: '2020-02-19T19:58:30.638Z',
							manager: {
								firstName: 'Dominique',
								lastName: 'Nsengimana',
							},
						},
					],
				});
			});
	});
	it('should catch error', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 404,
				response: {
					message: 'Something went wrong!',
				},
			});
		});
		await store.dispatch(getUserTripRequestsAction()).then(async () => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual([
				{ type: 'LOADING', payload: true },
				{ type: 'GET_USER_TRIP_REQUESTS_FAILED', payload: true },
				{ type: 'LOADING', payload: false },
			]);
		});
	});
});
