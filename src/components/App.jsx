import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WelcomePage from '../views/WelcomePage';
import LoginPage from '../views/LoginPage';

export default function App() {
        return (
            <Router>
            <Switch>
              <Route path='/' exact component={WelcomePage} />
              <Route path='/login' exact component={LoginPage} /> */}
            </Switch>
          
          </Router>
        );
}
