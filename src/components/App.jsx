import React, { Component } from 'react';
import Welcome from './Welcome.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from '../views/WelcomePage';
import LoginPage from '../views/LoginPage';
import HomeRedux from '../views/HomeRedux';
class App extends Component {
	render() {
		return (
			<div className='index'>
				<Router>
					<Switch>
						<Route path='/' exact component={WelcomePage} />
						<Route path='/login' exact component={LoginPage} />
						<Route path='/redux' exact component={HomeRedux} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
