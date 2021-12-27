import { types } from '../types/types';

const initState = {
    loading: false
}

export const loadingReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        
        case types.loadingStart:
            return {
                ...state,
                loading: true
            }

        case types.loadingFinalize:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}