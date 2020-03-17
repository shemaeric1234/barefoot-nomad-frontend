import React, { useEffect } from 'react';
import {
	Box,
	Card,
	CardContent,
	Typography,
	Grid,
	Button,
	Container,
} from '@material-ui/core';
import TextInput from '../../components/common/TextInput.component.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comments from '../../components/comments/comments.view.jsx';

export const normalizeType = type => {
	switch (type) {
		case 'multi-city':
			return 'Multiple cities trip';
		case 'one way':
			return 'One way trip';
		case 'return trip':
			return 'Return trip';
		default:
			break;
	}
};

export const Request = props => {
	useEffect(() => {
		if (!props.trip.length) {
			props.history.push('/trips');
		}
	});

	const statusColor = status => {
		return status === 'pending'
			? '#FBBC05'
			: status === 'approved'
			? '#34A853'
			: '#E10050';
	};

	return (
		<Box p={2}>
			<Card>
				<CardContent>
					<Grid container justify='space-between' alignItems='center'>
						<Grid item>
							<Typography
								style={{ fontWeight: 'bold', fontSize: 20, color: '#616161' }}
								variant='h3'
							>
								{props.trip.length ? normalizeType(props.trip[0].tripType) : ''}
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								style={{
									fontSize: 16,
									color: props.trip.length
										? statusColor(props.trip[0].status)
										: '',
								}}
								variant='h3'
							>
								{props.trip.length ? props.trip[0].status : ''}
							</Typography>
						</Grid>
					</Grid>
					<Box py={1}>
						<Typography style={{ fontSize: 14, color: '#616161' }} variant='h3'>
							{props.trip.length
								? `${props.user.firstName} ${props.user.lastName}`
								: ''}
						</Typography>
					</Box>
					<Typography style={{ fontSize: 14, color: '#616161' }} variant='h3'>
						{props.trip.length
							? new Date(props.trip[0].createdAt).toDateString()
							: ''}
					</Typography>
					{props.trip.length ? (
						props.trip.map((item, index) => {
							return (
								<Box key={index} py={2}>
									<Grid container justify='space-between'>
										<Grid xs={12} md={4} xl={2} item>
											<Box px={1}>
												<TextInput
													disabled={true}
													id='origin'
													label='Origin'
													name='origin'
													defaultValue={item.origin}
													required={false}
												/>
											</Box>
										</Grid>
										<Grid xs={12} md={4} xl={2} item>
											<Box px={1}>
												<TextInput
													disabled={true}
													id='destination'
													label='Destination'
													name='destination'
													defaultValue={item.destination}
													required={false}
												/>
											</Box>
										</Grid>
										<Grid xs={12} md={4} xl={2} item>
											<Box px={1}>
												<TextInput
													disabled={true}
													id='departureDate'
													label='Departure Date'
													name='firstName'
													defaultValue={new Date(
														item.departureDate,
													).toDateString()}
													required={false}
												/>
											</Box>
										</Grid>
										<Grid xs={12} md={4} xl={2} item>
											<Box px={1}>
												<TextInput
													disabled={true}
													id='returnDate'
													label='Return Date'
													name='returnDate'
													defaultValue={new Date(
														item.returnDate,
													).toDateString()}
													required={false}
												/>
											</Box>
										</Grid>
										<Grid xs={12} md={4} xl={2} item>
											<Box px={1}>
												<TextInput
													disabled={true}
													id='reason'
													label='Reason'
													name='reason'
													defaultValue={item.reason}
													required={false}
												/>
											</Box>
										</Grid>
										<Grid xs={12} md={4} xl={2} item>
											<Box px={1}>
												<TextInput
													disabled={true}
													id='accomodation'
													label='Accomodation'
													name='accomodation'
													defaultValue={item.accomodation}
													required={false}
												/>
											</Box>
										</Grid>
									</Grid>
								</Box>
							);
						})
					) : (
						<div />
					)}
					<Grid container justify='space-between' alignItems='flex-end'>
						<Grid item>
							<Button
								id='btn_edit_booking'
								disableElevation
								variant='contained'
								color='primary'
								onClick={() => {
									if (
										props.trip.length &&
										props.trip[0].status.toLowerCase() ==
											'Approved'.toLowerCase()
									) {
										props.history.push('/booking');
									}
								}}
							>
								{props.trip.length
									? props.trip[0].status.toLowerCase() ==
									  'Approved'.toLowerCase()
										? 'Book accommodation'
										: 'Edit'
									: ''}
							</Button>
						</Grid>
						<Grid item>
							<Typography
								style={{ fontSize: 16, color: '#616161' }}
								variant='h3'
							>
								Managed by :{' '}
								{props.trip.length
									? `${props.trip[0].manager.firstName} ${props.trip[0].manager.lastName}`
									: ''}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			<Container style={{ paddingTop: 42 }}>
				<Comments tripId={props.trip.length ? props.trip[0].tripId : ''} />
			</Container>
		</Box>
	);
};

export const mapStateToProps = state => {
	return {
		trip: state.tripRequestsReducers.trip,
		user: state.userProfileReducer.userProfileInfo,
	};
};

export default connect(mapStateToProps)(withRouter(Request));
