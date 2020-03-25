const getUserTripRequestsReducer = (
	state = { myTrips: [], trip: [], myTripsCount: 0 },
	action,
) => {
	switch (action.type) {
		case 'GET_USER_TRIP_REQUESTS_SUCCESS':
			return {
				...state,
				myTrips: action.payload.requestTrips,
				myTripsCount: action.payload.count,
			};
		case 'SET_SELLECTED_TRIP':
			return {
				...state,
				trip: action.payload,
			};
		case 'SET_TRIP_TO_EDIT':
			return {
				...state,
				tripToEdit: action.payload,
			};
		default:
			return state;
	}
};
export default getUserTripRequestsReducer;
