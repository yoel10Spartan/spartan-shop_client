import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const RouteProtection = ({
    isAuthenticated,
    pathRedirect,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            { ...rest }
            component={
                ( props ) => (
                    ( isAuthenticated )
                        ? ( <Component { ...props } /> )
                        : ( <Redirect to={ pathRedirect } /> )
                )
            }
        />
    )
}
