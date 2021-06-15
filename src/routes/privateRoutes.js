import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({

    component: Component,
    ...rest
}) => {
    
    const isAuthenticated = useSelector(state => state.authReducer.isLoggedIn);
    console.log("reached private")
    return(
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <Component {...props} />
                </div>            
            ): (
                <Redirect to="/signin" />
            )
        )} />
);
}
export default PrivateRoute;
