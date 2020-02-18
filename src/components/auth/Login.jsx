import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../general/footer';
import { connect } from 'react-redux';
import { signIn, logout, history } from '../../actions/signInAction';
import CircularProgress from '@material-ui/core/CircularProgress';
import { formUseStyles } from '../../styles/login/loginStyle.js';
import SocialAuth from '../auth/SocialLogin.jsx';


export class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.props.logout();
		this.state = {
			email: '',
			password: '',
      submitted: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
  }
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      history.push('/');
    }
  }
	handleSubmit(e) {
    e.preventDefault();
    // this.setState({ submitted: false });
		const { email, password } = this.state;
		if (email && password) {
      this.props.signIn(email, password);
    }
	}
	render() {
    const { classes } = this.props;
		const { email, password, submitted } = this.state;
		return (
			<Container component='main' maxWidth='xs'>
				<div className={classes.paper}>
					<Typography variant='h4' align='left'>
						{' '}	Sign In{' '}
					</Typography>
					<Typography variant='subtitle2' color='textSecondary' align='left'>
						Sign in to access the full features of Barefoot Nomad.
					</Typography>
					<br />
					<form className={classes.form} onSubmit={this.handleSubmit}>
						<Typography
							component='h1' variant='h6' color='textSecondary'	align='left'	>	{' '}	Email{' '}
						</Typography>
						<div>
							<TextField
								variant='outlined'	margin='normal'	required	fullWidth	label='Provide Your email'	name='email'	autoComplete='email'	value={this.email}	data-test='signin-email'
              	onChange={this.handleChange}	type='email'	autoFocus	/> {' '}		{submitted && !email && (
								<Typography component='h1' variant='subtitle2' color='error'>			Email is required	</Typography>	)}
						</div>
						<Typography
							component='h2'	variant='h6'	color='textSecondary'	align='left'	>	{' '}	Password{' '}
						</Typography>
						<div>
							<TextField	variant='outlined'	margin='normal'	required	fullWidth	name='password' label='Provide Your Password'	type='password'	value={this.password}	data-test='signin-password'
								onChange={this.handleChange}	autoComplete='current-password'/>{' '}
							{submitted && !password && (
								<Typography component='h1' variant='subtitle2' color='error'>	Password is required </Typography>	)}
						</div>
						<Typography component='h2' variant='subtitle1' align='left'>
							<Link	to='forgot-password' variant='body2'	className={classes.link}>	Forgot password?</Link>
						</Typography>
						{this.props.stateObject.signInReducer.error ? (
							<Typography component='h1' variant='subtitle2' color='error'>	{' '}
								{this.props.message}
							</Typography>) : null} 
            {!this.props.isLoading ?  (<Button type='submit'	fullWidth	variant='contained'	color='primary'	data-test='login-btn'	className={classes.submit} disabled={!password  || !email && true} >
							Sign In
						</Button>): <CircularProgress />}
            {/* {redirect ? history.push('/') : null} */}
						<Typography variant='h6' color='textSecondary'>	{' '}	Or{' '}	</Typography>
						<SocialAuth />
						<Typography variant='subtitle2' color='textSecondary'>	Don't have an account yet?{' '}
							<Link style={{ textDecoration: 'none' }} href='/auth/signup' variant='body2' className={classes.link}>	{'Sign Up'}	</Link>
							<br /> <br />	By signing in or creating an account, you agree with our{' '}
							<Link href='#' variant='body2' className={classes.link}>	{'Terms & Conditions and Privacy Statement'}	</Link>
						</Typography>
					</form>
				</div>
				<Footer />
			</Container>
		);
	}
}
export function mapStateToProps(state) {
  const loggingIn = state.signInReducer;
  const loadding = state.appReducer;
	return { message: 'Email or Password is incorrect', stateObject: state, user: loggingIn.user, isLoading: loadding.isLoading };
}

const connectedLoginPage = connect(mapStateToProps, { signIn, logout, history })(
	withStyles(formUseStyles)(LoginForm),
);

export default connectedLoginPage;
