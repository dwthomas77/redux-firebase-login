import React from 'react'
import {
    Route,
    Redirect,
} from 'react-router-dom';

const AuthorizedRoute = ({ user: { uid }, component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        !!uid ? (
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
