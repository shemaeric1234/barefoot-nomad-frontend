import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography, CircularProgress, Box, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CheckIcon from '@material-ui/icons/Check';
import Footer from '../components/common/footer.js';
import AdsPictures from '../components/trip-request/adsPictures.jsx';
import OneWay from '../components/trip-request/oneWay.jsx';
import { Button, Grid, Paper, Hidden, Toolbar, Link } from '@material-ui/core';
import { requestTrip, GetAccomodations } from '../actions/tripRequestAction.js';
import { connect } from 'react-redux';
import withWidth from '@material-ui/core/withWidth';

const styles = {
	tabs: {
		background: '#fff',
		color: 'black',
		align: 'center',
	},
	slide: {
		padding: 1,
		minHeight: 20,
		color: '#fff',
	},
	slide1: {
		backgroundColor: '#fff',
		width: '96%',
	},
	slide2: {
		backgroundColor: '#fff',
	},
	slide3: {
		backgroundColor: '#fff',
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: '10px 10px 10px 10px',
		margin: '0px 0px 10px 0px',
		textAlign: 'center',
		alignContent: 'center',
	},
	picture: {
		padding: '2px 2px 2px 10px',
		textAlign: 'center',
		alignContent: 'center',
	},
	button: {
		margin: '0px 30px 0px 0px',
		textAlign: 'left',
		backgroundColor: 'white',
	},
};

export class TripRequest extends Component {
	constructor(props) {
		super(props);
		this.handleIndexChange = this.handleIndexChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleChangeDepartureDate = this.handleChangeDepartureDate.bind(this);
		this.handleChangeReturnDate = this.handleChangeReturnDate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOncloseSnackbar = this.handleOncloseSnackbar.bind(this);
		this.state = {
			activeIndex: 0,
			index: 0,
			submitted: false,
			From: '',
			To: '',
			type: 'one way',
			departureDate: `${new Date()}`,
			returnDate: `${new Date()}`,
			invalidReturnDate: '',
			reason: '',
			accomodationId: '',
			open: true,
		};
	}

	handleIndexChange = (event, value) => {
		this.setState({
			index: value,
		});
	};
	handleChange(e) {
		let { name, value } = e.target;
		this.setState({ [name]: value });
		if (value === this.state.From && value === this.state.To) {
			this.setState({ To: '' });
			this.props.info.accommodations = '';
		}
		if (name === 'To' && value !== this.state.From) {
			this.props.GetAccomodations(value);
		}
	}
	handleChangeDepartureDate(date) {
		this.setState({ departureDate: date });
	}
	handleChangeReturnDate(date) {
		if (this.state.departureDate > date || !date) {
			this.setState({
				invalidReturnDate: 'Invalid Return Date',
				returnDate: this.state.departureDate,
			});
		} else {
			this.setState({ invalidReturnDate: '', returnDate: date });
		}
	}
	handleClick(accommodation) {
		if (accommodation) {
			this.setState({
				accomodationId: accommodation,
			});
		}
	}
	handleSubmit() {
		const {
			From,
			To,
			reason,
			departureDate,
			returnDate,
			accomodationId,
			type,
		} = this.state;
		if (this.state.index === 0) {
			this.props.requestTrip({
				From,
				To,
				departureDate,
				reason,
				accomodationId,
				type,
			});
		} else if (this.state.index === 1) {
			this.props.requestTrip({
				From,
				To,
				departureDate,
				returnDate,
				reason,
				accomodationId,
				type: 'round trip',
			});
		}
		this.setState({
			From: '',
			To: '',
			type: 'one way',
			departureDate: `${new Date()}`,
			returnDate: `${new Date()}`,
			invalidReturnDate: '',
			reason: '',
			accomodationId: '',
		});
		this.props.info.accommodations = '';
	}
	handleOncloseSnackbar() {
		this.setState({ open: false });
	}
	render() {
		const { index } = this.state;
		return (
			<Box style={Object.assign({}, styles.root)}>
				<Toolbar>
					<Typography variant='h6' id='tableTitle'>
						Create Trip Request
					</Typography>{' '}
					{this.props.tripCreated && (
						<Snackbar
							open={this.state.open}
							autoHideDuration={3000}
							anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
							data-test='closeSnackbar'
							onClose={this.handleOncloseSnackbar}
						>
							<Alert
								style={{
									width: '100%',
									heigth: '10px',
									padding: '0px 10px 0px 10px',
								}}
								icon={<CheckIcon fontSize='inherit' />}
								severity='success'
							>
								{' '}
								<Typography>
									{this.props.message}. Click here to{' '}
									<Button
										style={Object.assign({}, styles.button)}
										color='primary'
									>
										{' '}
										<Link
											href='/trips'
											variant='body2'
											style={{ textDecoration: 'none', color: '#0094FF' }}
										>
											{'View all trips'}
										</Link>
									</Button>
								</Typography>
							</Alert>
						</Snackbar>
					)}
					{this.props.error && (
						<Snackbar
							open={this.state.open}
							autoHideDuration={3000}
							onClose={this.handleOncloseSnackbar}
						>
							<Alert
								severity='error'
								style={{
									heigth: '40px',
									align: 'left',
								}}
							>
								<Typography>{this.props.message}</Typography>
							</Alert>
						</Snackbar>
					)}
				</Toolbar>
				<Paper style={Object.assign({}, styles.paper)}>
					<Tabs
						value={index}
						data-test='index'
						onChange={this.handleIndexChange}
						style={styles.tabs}
					>
						<Tab label='One Way Trip' />
						<Tab label='Round Trip' />
						<Tab label='Multi City Trip' />
					</Tabs>
					<OneWay
						value={this.state}
						onHandleChange={this.handleChange}
						handleChangeDepartureDate={this.handleChangeDepartureDate}
						handleChangeReturnDate={this.handleChangeReturnDate}
					/>
				</Paper>
				<Paper style={Object.assign({}, styles.picture)}>
					<Hidden lgDown>
						<AdsPictures
							value={this.state}
							bigSize={true}
							screenSize={this.props.width}
							onClick={this.handleClick}
							data-test='click'
						/>
					</Hidden>
					<Hidden only='xl'>
						<AdsPictures
							value={this.state}
							screenSize={this.props.width}
							onClick={this.handleClick}
						/>
					</Hidden>
				</Paper>
				{!this.props.isLoading ? (
					<Grid container>
						{' '}
						<Grid item xs={4} xl={5} lg={5}></Grid>
						<Grid item md={8} xl={6} lg={6}>
							<br />
							<Button
								variant='contained'
								color='primary'
								onClick={this.handleSubmit}
								disabled={
									!this.state.From ||
									!this.state.To ||
									!this.state.reason ||
									!this.state.departureDate ||
									(!this.state.accomodationId && true)
								}
							>
								Create Request
							</Button>
						</Grid>{' '}
					</Grid>
				) : (
					<Grid container>
						{' '}
						<Grid item xs={4} xl={5} lg={5}></Grid>
						<Grid item md={8} xl={6} lg={6}>
							<CircularProgress />{' '}
						</Grid>{' '}
					</Grid>
				)}
				<Grid item style={Object.assign({}, styles.root)}>
					<Typography variant='h4' align='center'>
						{' '}
						<Footer />{' '}
					</Typography>
				</Grid>
			</Box>
		);
	}
}
export const mapStateToProps = state => {
	const loadding = state.appReducer;
	return {
		info: state.tripRequestReducer,
		isLoading: loadding.isLoading,
		message: state.tripRequestReducer.message,
		tripCreated: state.tripRequestReducer.tripCreated,
		error: state.tripRequestReducer.error,
	};
};
const request = connect(mapStateToProps, {
	requestTrip,
	GetAccomodations,
})(withWidth()(TripRequest));

export default request;
