import homeReducer from '../../src/reducers/homeReducer';
import configureStore from 'redux-mock-store';
import { GREETING, GOOD_BYE } from '../../src/actions/homeActions';
import * as selectedActions from '../../src/actions/homeActions';

const mockStore = configureStore();
const store = mockStore();

describe('home reducer test ', () => {
	beforeEach(() => {
		store.clearActions();
	});
	it('Greeting actions', () => {
		const greetingActions = [
			{
				type: GREETING,
			},
		];
		store.dispatch(selectedActions.greeting());
		expect(store.getActions()).toEqual(greetingActions);
	});

	it('Good bye actions', () => {
		const goodByeActions = [{ type: GOOD_BYE }];
		store.dispatch(selectedActions.goodBye());
		expect(store.getActions()).toEqual(goodByeActions);
	});
});
