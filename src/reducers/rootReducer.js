import { combineReducers } from 'redux';
import { artistReducer } from './artistReducer';
import { artworkReducer } from './artworkReducer';
import { authReducer } from './authReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    artwork: artworkReducer,
    artist: artistReducer
});