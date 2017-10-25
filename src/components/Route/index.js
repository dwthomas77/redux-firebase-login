import React from 'react'
import {
    Route,
    Redirect,
} from 'react-router-dom';

const AuthorizedRoute = ({ isLoggedIn, component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isLoggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/user',
                    state: { from: props.location }
                }}/>
            )
    )}/>
);

export default AuthorizedRoute;
