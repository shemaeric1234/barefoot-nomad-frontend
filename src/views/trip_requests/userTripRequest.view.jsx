import React, { useEffect } from 'react'
import { Box, Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import TextInput from '../../components/common/TextInput.component.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const nomolizeType = (type) => {
    switch (type) {
        case 'multi-city':
            return 'Multiple cities trip'
        case 'one way':
            return 'One way trip'
        case 'return trip':
            return 'Return trip'
        default:
            break;
    }
}

export const Request = (props) => {
    useEffect(() => {
        if (!props.trip.id) {
            props.history.push('/trips');
        }
    })

    return (
        <Box p={2}>
            <Card>
                <CardContent>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item><Typography style={{ fontWeight: "bold", fontSize: 20, color: '#616161' }} variant="h3">{nomolizeType(props.trip.tripType)}</Typography></Grid>
                        <Grid item><Typography style={{ fontSize: 16, color: '#FBBC05' }} variant="h3">{props.trip.status}</Typography></Grid>
                    </Grid>
                    <Box py={1}>
                        <Typography style={{ fontSize: 14, color: '#616161' }} variant="h3">{`${props.user.firstName} ${props.user.lastName}`}</Typography>
                    </Box>
                    <Typography style={{ fontSize: 14, color: '#616161' }} variant="h3">{new Date(props.trip.createdAt).toDateString()}</Typography>
                    <Box py={4}>
                        <Grid container justify="space-between">
                            <Grid xs={12} md={4} xl={2} item>
                                <Box px={1}>
                                    <TextInput
                                        disabled={true}
                                        id="origin"
                                        label="Origin"
                                        name="origin"
                                        defaultValue={props.trip.origin}
                                        required={false} />
                                </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                                <Box px={1}>
                                    <TextInput
                                        disabled={true}
                                        id="destination"
                                        label="Destination"
                                        name="destination"
                                        defaultValue={props.trip.destination}
                                        required={false} />
                                </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                                <Box px={1}>
                                    <TextInput
                                        disabled={true}
                                        id="departureDate"
                                        label="Departure Date"
                                        name="firstName"
                                        defaultValue={new Date(props.trip.departureDate).toDateString()}
                                        required={false} />
                                </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                                <Box px={1}>
                                    <TextInput
                                        disabled={true}
                                        id="returnDate"
                                        label="Return Date"
                                        name="returnDate"
                                        defaultValue={new Date(props.trip.returnDate).toDateString()}
                                        required={false} />
                                </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                                <Box px={1}>
                                    <TextInput
                                        disabled={true}
                                        id="reason"
                                        label="Reason"
                                        name="reason"
                                        defaultValue={props.trip.reason}
                                        required={false} />
                                </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                                <Box px={1}>
                                    <TextInput
                                        disabled={true}
                                        id="accomodation"
                                        label="Accomodation"
                                        name="accomodation"
                                        defaultValue={props.trip.accomodation}
                                        required={false} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container justify="space-between" alignItems="flex-end">
                        <Grid item>
                            <Button disableElevation variant="contained" color="primary">
                                Edit
                        </Button>
                        </Grid>
                        <Grid item>
                            <Typography style={{ fontSize: 16, color: '#616161' }} variant="h3">Managed by : {props.trip.manager ? `${props.trip.manager.firstName} ${props.trip.manager.lastName}` : ''}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export const mapStateToProps = (state) => {
    return {
        trip: state.tripRequestsReducers.trip,
        user: state.userProfileReducer.userProfileInfo
    };
};

export default connect(mapStateToProps)(withRouter(Request));
