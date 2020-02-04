import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import EditIcon from '@material-ui/icons/Edit';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

class NavLinks extends Component {
	state = {
		bgcolor: '#f1f1f1',
	};

	changeBgColor = () => {
		this.setState({ bgcolor: '#616161' });
	};
	render() {
		return (
			<Grid
				container
				style={{ width: '100%', backgroundColor: '#f1f1f1', marginTop: '15px' }}
			>
				<Divider />
				<ListItem button>
					<ListItemIcon>
						<DirectionsWalkIcon />
					</ListItemIcon>
					<ListItemText>
						<Typography>Trips</Typography>
					</ListItemText>
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText>
						<Link to='/profile' style={{ textDecoration: 'none' }}>
							<Typography>Profile</Typography>
						</Link>
					</ListItemText>
				</ListItem>
				<Divider />
			</Grid>
		);
	}
}

export default NavLinks;
