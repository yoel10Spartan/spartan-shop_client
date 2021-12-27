import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { getArtist } from '../actions/artist';
import { getArtworks, getArtworksRandom, getCategories } from '../actions/artwork';
import { chekingToken } from '../actions/auth';
import { AuthScreen } from '../components/auth/AuthScreen';
import { AboutUs } from '../components/privacy/AboutUs';

import { PublicRoutes } from './PublicRoutes';
import { RouteProtection } from './RouteProtection';

export const AppRoute = () => {

    const dispatch = useDispatch();
    const { id_user, cheking } = useSelector(state => state.auth.login_information);

    dispatch( getArtworks() );
    useEffect(() => {
        dispatch( getArtist() );
        dispatch( getArtworksRandom() );
        dispatch( getCategories() )
    }, [ dispatch ]);

    useEffect(() => {
        dispatch( chekingToken() )
    }, [ dispatch ]);

    if( !!cheking ){
        return <h2> Loading... </h2> 
    }

    return (
        <Router>
            <div>
                <Switch>
                    <RouteProtection 
                        exact
                        path='/spartan_books/login'
                        component={ AuthScreen }
                        isAuthenticated={ !!!id_user }
                        pathRedirect='/'  
                    />
                    <Route
                        path='/'
                        component={ PublicRoutes }
                    />
                </Switch>
            </div>
        </Router>
    )
}
