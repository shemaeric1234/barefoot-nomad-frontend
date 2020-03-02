import React from 'react';
import { mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../../src/reducers/index';
import { Request, mapStateToProps, nomolizeType } from '../../src/views/trip_requests/userTripRequest.view.jsx';


const middlewares = [thunk];
const testStore = state => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(
        createStore,
    );
    return createStoreWithMiddleware(reducer, state);
};

describe('Render trip request ui', () => {

    const props = {
        "id": 1,
        "origin": "Kigali",
        "destination": "Kincasa",
        "tripId": "b4c99c41-9d2a-42f1-9a4c-65111d48e0d4",
        "tripTripId": 2,
        "tripType": "one way",
        "status": "pending",
        "accomodation": "fgfghftjghv",
        "departureDate": "2020-09-12T00:00:00.000Z",
        "returnDate": "2020-02-01T22:00:00.000Z",
        "createdAt": "2020-02-19T19:58:30.638Z",
        "manager": {
            "firstName": "Dominique",
            "lastName": "Nsengimana"
        }
    };

    const user = {
        firstName: 'Dominique',
        lastName: 'Veda'
    }
    const prop = {}
    // const wrapper = mount(<Request trip={props} user={user} />);
    // mount(<Request trip={prop} history={{ push: jest.fn() }} user={user} />);


    const store = testStore({});
    const wrapper = mount(
        <Provider store={store}>
            <Request trip={props} user={user} />
        </Provider>
    );

    mount(
        <Provider store={store}>
            <Request trip={prop} history={{ push: jest.fn() }} user={user} />
        </Provider>
    );


    it('should map state to props successfully', () => {

        const mapState = mapStateToProps({
            tripRequestsReducers: {
                trip: {
                    "id": 1,
                    "origin": "Kigali",
                    "destination": "Kincasa",
                    "tripId": "b4c99c41-9d2a-42f1-9a4c-65111d48e0d4",
                    "tripTripId": 2,
                    "tripType": "one way",
                    "status": "pending",
                    "accomodation": "fgfghftjghv",
                    "departureDate": "2020-09-12T00:00:00.000Z",
                    "returnDate": "2020-02-01T22:00:00.000Z",
                    "createdAt": "2020-02-19T19:58:30.638Z",
                    "manager": {
                        "firstName": "Dominique",
                        "lastName": "Nsengimana"
                    }
                }
            },
            userProfileReducer: {
                userProfileInfo: {
                    firstName: 'Dominique',
                    lastName: 'Veda'
                }
            }
        })

        expect(mapState.user).toEqual(user);
    });

    it('should render all components successfully', () => {
        const origin = wrapper.find('#origin').at(1);
        expect(origin.first().props().label).toEqual('Origin');

        const destination = wrapper.find('#destination').at(1);
        expect(destination.first().props().label).toEqual('Destination');

        const departureDate = wrapper.find('#departureDate').at(1);
        expect(departureDate.first().props().label).toEqual('Departure Date');

        const returnDate = wrapper.find('#returnDate').at(1);
        expect(returnDate.first().props().label).toEqual('Return Date');

        const reason = wrapper.find('#reason').at(1);
        expect(reason.first().props().label).toEqual('Reason');

        const accomodation = wrapper.find('#accomodation').at(1);
        expect(accomodation.first().props().label).toEqual('Accomodation');
    })

    it('should return collect trip type', () => {
        expect(nomolizeType('multi-city')).toEqual('Multiple cities trip');
        expect(nomolizeType('one way')).toEqual('One way trip');
        expect(nomolizeType('return trip')).toEqual('Return trip');
        nomolizeType('eturn trip');
    })
});
