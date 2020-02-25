const getUserTripRequestsReducer = (state = { myTrips: [], trip: {} }, action) => {
    switch (action.type) {
        case 'GET_USER_TRIP_REQUESTS_SUCCESS':
            return {
                ...state,
                myTrips: action.payload,
            }
        case 'SET_SELLECTED_TRIP':
            return {
                ...state,
                trip: action.payload,
            }
        default: return state
    }
}
export default getUserTripRequestsReducer;