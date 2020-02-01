import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import verifyToken from '../../helpers/verifyToken';
import queryString from 'query-string';
export const PrivateRoute = ({ component: Component, ...rest }) => {
   const getToken = () => {
      const query = queryString.parse(location.search);
      const data = JSON.parse(query.info || '{}');     
      if(data.token) {
         localStorage.setItem('token', data.token);
      }
      return localStorage.getItem('token');
   }
   const history = createBrowserHistory({
      forceRefresh: true
   });
   return (
      <BrowserRouter>
         <Route
            {...rest}
            render={props => {
               const v = verifyToken(getToken());
               return (v) ? (<Component {...props} />) : (history.push('/auth/signin'));
            }
            }
         />
      </BrowserRouter>
   )
}
