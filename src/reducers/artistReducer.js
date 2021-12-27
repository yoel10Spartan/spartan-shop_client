import { types } from '../types/types';

const initState = {
    artist: []
}

export const artistReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        
        case types.artistSetItems:
            return {
                ...state,
                artist: [ ...action.payload ]
            }

        default:
            return state;
    }
}