import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from '../views/signup.view.jsx';
import Signin from '../views/signin.view.jsx';

class DefaultLayout extends PureComponent {
    render() {
        return (
            <div>
                <div>DefaultLayout</div>
                <Router>
                    <Switch>
                        <Route exact path='/auth'>
                            <Redirect to='/auth/signin' />
                        </Route>
                        <Route path='/auth/signup' component={Signup} />
                        <Route path='/auth/signin' component={Signin} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default DefaultLayout