import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Box, Hidden, Grid, Card, CardContent } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserTripRequestsAction } from '../../actions/requests/tripRequestsAction';
import Moment from 'react-moment';
import { setSelectedTripRequestAction } from '../../actions/requests/tripRequestsAction';

const headCells = [
  { id: 'Origin', align: 'left', label: 'Origin' },
  { id: 'Destination', align: 'right', label: 'Destination' },
  { id: 'Trip Type', align: 'right', label: 'Trip Type' },
  { id: 'Status', align: 'right', label: 'Status' },
  { id: 'Accomodation', align: 'right', label: 'Accomodation' },
  { id: 'Departure Date', align: 'right', label: 'Departure Date' },
  { id: 'Return Date', align: 'right', label: 'Return Date' },
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  container: {
    maxHeight: 550,
  },
}));

export const handleClick = (props, trip) => {
  props.history.push(`/trips/${trip.id}`)
  props.setSelectedTripRequestAction(trip);
};

export const Requests = (props) => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    if (props.trips.length == 0) {
      props.getUserTripRequestsAction({ page: 1, limit: 10 });
    }
  })

  const handleChangePage = (props, setPage, event, newPage, page, rowsPerPage) => {
    setPage(newPage);
    props.getUserTripRequestsAction({ page: page, limit: rowsPerPage });
  };

  const handleChangeRowsPerPage = (props, setPage, setRowsPerPage, event, page, rowsPerPage) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
    props.getUserTripRequestsAction({ page: page, limit: rowsPerPage });
  };

  return (
    <Paper >
      <Toolbar>
        <Typography variant="h6" id="tableTitle">
          My Trip Requests
        </Typography>
      </Toolbar>
      <Hidden mdDown>
        <TableContainer style={{ overflowX: "auto" }}
          className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
            style={{ minWidth: "340px" }}
          >
            <TableHead>
              <TableRow>
                {headCells.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ backgroundColor: '#0094FF', color: 'white' }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.trips.map((row, index) => {
                return (
                  <TableRow
                    id="tableRow"
                    hover
                    onClick={event => handleClick(props, row)}
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                  >
                    <TableCell align="left">{row.origin}</TableCell>
                    <TableCell align="right">{row.destination}</TableCell>
                    <TableCell align="right">{row.tripType}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.accomodation}</TableCell>
                    <TableCell align="right">{`${row.departureDate}` != 'null' ? <Moment format="D MMM YYYY">{row.departureDate}</Moment> : '-'}</TableCell>
                    <TableCell align="right">{`${row.returnDate}` != 'null' ? <Moment format="D MMM YYYY">{row.returnDate}</Moment> : '-'}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Hidden>

      <Hidden lgUp>
        {props.trips.map((item, index) => {
          return (
            <Box key={index} p={1}>
              <Card id='cardItem' onClick={() => handleClick(props, item)} variant="outlined">
                <CardContent style={{ padding: 16 }}>
                  <Grid container>
                    <Grid item container justify="space-between">
                      <Grid item><Typography style={{ fontSize: 16, color: "#C4C4C4" }}>Origin</Typography></Grid>
                      <Grid item>{item.origin}</Grid>
                    </Grid>
                    <Grid item container justify="space-between">
                      <Grid item><Typography style={{ fontSize: 16, color: "#C4C4C4" }}>Destination</Typography></Grid>
                      <Grid item>{item.destination}</Grid>
                    </Grid>
                    <Grid item container justify="space-between">
                      <Grid item><Typography style={{ fontSize: 16, color: "#C4C4C4" }}>Trip type</Typography></Grid>
                      <Grid item>{item.tripType}</Grid>
                    </Grid>
                    <Grid item container justify="space-between">
                      <Grid item><Typography style={{ fontSize: 16, color: "#C4C4C4" }}>Status</Typography></Grid>
                      <Grid item>{item.status}</Grid>
                    </Grid>
                    <Grid item container justify="space-between">
                      <Grid item><Typography style={{ fontSize: 16, color: "#C4C4C4" }}>Accomodation</Typography></Grid>
                      <Grid item>{item.accomodation}</Grid>
                    </Grid>
                    <Grid item container justify="space-between">
                      <Grid item><Typography style={{ fontSize: 16, color: "#C4C4C4" }}>Departure date</Typography></Grid>
                      <Grid item>{`${item.departureDate}` != 'null' ? <Moment format="D MMM YYYY">{`${item.departureDate}`}</Moment> : '-'}</Grid>
                    </Grid>
                    <Grid item container justify="space-between">
                      <Grid item><Typography style={{ fontSize: 16, color: "#C4C4C4" }}>Return date</Typography></Grid>
                      <Grid item>{`${item.returnDate}` != 'null' ? <Moment format="D MMM YYYY">{item.returnDate}</Moment> : '-'}</Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          )
        })}
      </Hidden>
      <TablePagination
        id="pagination"
        rowsPerPageOptions={[10, 20, 50, 100]}
        component="div"
        count={props.trips.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={(event, newPage) => handleChangePage(props, setPage, event, newPage, page, rowsPerPage)}
        onChangeRowsPerPage={(event) => handleChangeRowsPerPage(props, setPage, setRowsPerPage, event, page, rowsPerPage)}
      />
    </Paper>
  );
}

export const mapStateToProps = (state) => {
  return {
    trips: state.tripRequestsReducers.myTrips
  };
};

export default connect(mapStateToProps, { getUserTripRequestsAction, setSelectedTripRequestAction })(withRouter(Requests));
