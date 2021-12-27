import Swal from "sweetalert2";
import { fetchTokenLess } from "../helpers/fetch"
import { types } from "../types/types";

const setArtworks = ( listArtworks ) => ({
    type: types.artworkSetItems,
    payload: listArtworks
});

const setArtworksRandom = ( listTwoArtworks ) => ({
    type: types.artworkSetItemRandom,
    payload: listTwoArtworks
});

const setCategories = ( listCategories ) => ({
    type: types.categoriesSetItems,
    payload: listCategories
});

export const getArtworks = () => {
    return async ( dispatch ) => {
        const resp = await fetchTokenLess( '/client/get_artworks', 'GET' );
        const data = await resp.json();

        if( data.ok ){
            dispatch( setArtworks( data.content ) )
        } else {
            Swal.fire({
                icon: 'error', title: 'Oops...', text: 'Records could not be obtained',
            });
        }
    }
}

export const getArtworksByCategory = (id_category) => {
    return async ( dispatch ) => {
        const resp = await fetchTokenLess( `/client/get_artwork_by_category/${id_category}`, 'GET' );
        const data = await resp.json();

        if( data.ok ){
            dispatch( setArtworks( data.content ) )
        } else {
            Swal.fire({
                icon: 'error', title: 'Oops...', text: 'Records could not be obtained',
            });
        }
    }
}

export const getArtworksRandom = () => {
    return async ( dispatch ) => {
        const resp = await fetchTokenLess( '/client/get_two_artwork', 'GET' );
        const data = await resp.json();

        if( data.ok ){
            dispatch( setArtworksRandom( data.content ) )
        } else {
            Swal.fire({
                icon: 'error', title: 'Oops...', text: 'Records could not be obtained',
            });
        }
    }
}

export const getCategories = () => {
    return async ( dispatch ) => {
        const resp = await fetchTokenLess( '/client/get_categories', 'GET' );
        const data = await resp.json();

        if( data.ok ){
            dispatch( setCategories( data.content ) )
        } else {
            Swal.fire({
                icon: 'error', title: 'Oops...', text: 'Records could not be obtained',
            });
        }
    }
}

const newPoduct = ( data ) => ({
    type: types.shopingAdd,
    payload: data
});

const deletePoductShoping = ( id ) => ({
    type: types.shopingDelete,
    payload: id
});

export const deleteAllPoductShoping = () => ({
    type: types.shopingDeleteAll
});

export const addNewProduct = (data) => {
    return async (dispatch) => {
        dispatch(newPoduct(data))
        Swal.fire({
            icon: 'success',
            title: 'New product added',
            text: 'Your product was successfully added!'
        })
    }
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        dispatch(deletePoductShoping(id))
        Swal.fire({
            icon: 'success',
            title: 'Your product was removed',
            text: 'Your product has been removed, you can tell us what made you change your mind!'
        })
    }
}