import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import { Divider, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = theme => ({
	isActive: {
		backgroundColor: '#F1F1F1',
		color: '#2196F3',
	},
});
export class NavLinks extends Component {
	state = {
		bgcolor: '#f1f1f1',
	};

	changeBgColor = () => {
		this.setState({ bgcolor: '#F1F1F1' });
	};
	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				style={{ width: '100%', backgroundColor: 'white', marginTop: '15px' }}
			>
				<Divider />
				<ListItem button>
					<ListItemIcon>
						<DirectionsWalkIcon />
					</ListItemIcon>
					<ListItemText>
						<Link to='/trips' style={{ textDecoration: 'none' }}>
							<Typography>Trips</Typography>
						</Link>
					</ListItemText>
				</ListItem>
				<Divider />
				<ListItem
					button
					className={
						window.location.pathname === '/profile' ? classes.isActive : 'null'
					}
				>
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

export default withStyles(useStyles)(NavLinks);
