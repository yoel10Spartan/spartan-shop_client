import Swal from "sweetalert2";
import { fetchTokenLess } from "../helpers/fetch"
import { types } from "../types/types";

const setArtist = ( listArtists ) => ({
    type: types.artistSetItems,
    payload: listArtists
});

export const getArtist = () => {
    return async ( dispatch ) => {
        const resp = await fetchTokenLess( '/client/get_artist', 'GET' );
        const data = await resp.json();

        if( data.ok ){
            dispatch( setArtist( data.content ) )
        } else {
            Swal.fire({
                icon: 'error', title: 'Oops...', text: 'Records could not be obtained',
            });
        }
    }
}