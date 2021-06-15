import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({

    component: Component,
    ...rest
}) => {
    
    const isAuthenticated = useSelector(state => state.authReducer.isLoggedIn);
    console.log("reached public")
    return(
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />           
        ): (
            <Component {...props} />
        )
    )} />
);
}

export default PublicRoute;