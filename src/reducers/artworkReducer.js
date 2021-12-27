import { types } from '../types/types';

const initState = {
    artworks: [],
    artworkRandom: [],
    categories: [],
    shopingCart: []
}

export const artworkReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        
        case types.artworkSetItems:
            return {
                ...state,
                artworks: [ ...action.payload ]
            }

        case types.artworkSetItemRandom:
            return {
                ...state,
                artworkRandom: [ ...action.payload ]
            }

        case types.categoriesSetItems:
            return {
                ...state,
                categories: [ ...action.payload ]
            }

        case types.shopingAdd:
            return {
                ...state,
                shopingCart: [ action.payload, ...state.shopingCart ]
            }

        case types.shopingDelete:
            return {
                ...state,
                shopingCart: [ ...state.shopingCart.filter( prod => prod.id_artwork !== action.payload ? prod : '' ) ]
            }

        case types.shopingDeleteAll:
            return {
                ...state,
                shopingCart: []
            }

        default:
            return state;
    }
}