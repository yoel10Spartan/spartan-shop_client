import React from 'react';
import { Provider } from 'react-redux'
import { AppRoute } from './routes/AppRoute'
import { store } from './store/store';
import './styles.css';

export const SpartanShop = () => {
    return (
        <Provider store={ store }>
            <AppRoute />
        </Provider>
    )
}
