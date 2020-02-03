import React, { PureComponent } from 'react';
import LoginForm from '../components/auth/Login.jsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { viewUseStyles } from '../styles/login/loginStyle.js';

export class SignIn extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<br />
				<Grid container alignItems='center' className={classes.leftGrid}>
					<Grid item xs={7}>
						<img
							src='https://res.cloudinary.com/drpye5niv/image/upload/v1580822689/barefoot_nomad_logo_xvfgsp.png'
							width='20%'
							height='10%'
						/>
						<img
							src='https://res.cloudinary.com/drpye5niv/image/upload/v1580822702/barefoot_homepage_image_eadp12.png'
							width='110%'
							height='95%'
							display={{ xs: 'none', sm: 'block' }}
						/>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.paper}>
							{' '}
							<LoginForm />
						</Paper>
					</Grid>
				</Grid>
				<Container fixed className={classes.phoneContent}>
					<Paper className={classes.paper}>
						{' '}
						<LoginForm />
					</Paper>{' '}
				</Container>
			</div>
		);
	}
}

const connectedLoginPage = withStyles(viewUseStyles)(SignIn);

export default connectedLoginPage;
