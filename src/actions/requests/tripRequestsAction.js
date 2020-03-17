import axios from 'axios';
import { config } from 'dotenv';
config();
export const getUserTripRequestsAction = props => async dispatch => {
	dispatch({ type: 'LOADING', payload: true });
	const token = localStorage.getItem('token');
	try {
		const results = await axios.get(
			`${process.env.BACKEND_BASE_URL}/api/v1/trips/my-trip-requests/?page=${props.page}&limit=${props.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					token: `Bearer ${token}`,
				},
			},
		);
		dispatch({
			type: 'GET_USER_TRIP_REQUESTS_SUCCESS',
			payload: results.data.data,
		});
		dispatch({ type: 'LOADING', payload: false });
	} catch (error) {
		dispatch({ type: 'GET_USER_TRIP_REQUESTS_FAILED', payload: true });
		dispatch({ type: 'LOADING', payload: false });
	}
};
export const setSelectedTripRequestAction = props => async dispatch => {
	dispatch({ type: 'SET_SELLECTED_TRIP', payload: props });
};
