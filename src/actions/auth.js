import Swal from "sweetalert2";

import { fetchLogin, fetchTokenLess, fetchTokenLessWithData, fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types";

const login = ( data ) => ({
    type: types.authStartLogin,
    payload: { ...data }
})

export const startExit = () => ({
    type: types.authStartExit
});

export const setOkRegister = () => ({
    type: types.authSetOkRegister
});

export const deleteOkRegister = () => ({
    type: types.authDeleteOkRegister
});

export const startCharging = () => ({
    type: types.loadingStart
});

export const finishCharging = () => ({
    type: types.loadingFinalize
});

export const startLogin = ( data_login ) => {
    return async ( dispatch ) => {
        dispatch( startCharging() );
        const resp = await fetchLogin( '/client/login', data_login, 'POST' );
        const data = await resp.json();
        dispatch( finishCharging() );

        if( data.ok ){
            localStorage.setItem( 'token', data.content.token );
            dispatch( login( data.content ) );
        } else {
            Swal.fire({
                icon: 'error', title: 'Oops...', text: data.msg,
            });
        }
    }
}

export const chekingToken = () => {
    return async ( dispatch ) => {
        const resp = await fetchWithToken( '/client/renew_token', 'POST' );
        const data = await resp.json();

        if( data.ok ){
            localStorage.setItem( 'token', data.content.token );
            dispatch( login( data.content ) );
        } else {
            dispatch( startLogout() );
        }
    }
}

export const startLogout = () => {
    return ( dispatch ) => {
        dispatch( startExit() );
        localStorage.clear();
    }
}

export const startSignUp = ( data ) => {
    return async ( dispatch ) => {
        dispatch( startCharging() );
        const resp = await fetchTokenLessWithData( '/client/register', data, 'POST' );
        const resp_json = await resp.json();
        dispatch( finishCharging() );

        if( !resp_json.ok ){
            return Swal.fire({
                icon: 'error', title: 'Oops...', text: resp_json.msg
            });
        }

        await dispatch( setOkRegister() );
        Swal.fire(
            'Successful registration',
            'We have sent you a confirmation email',
            'success'
        )
    }
}

export const activateAccount = ( id ) => {
    return async () => {
        const resp = await fetchTokenLess( `/client/activate/${id}`, 'PUT' );
        const resp_json = await resp.json();
        
        if( !resp_json.ok ){
            Swal.fire({
                icon: 'error', title: 'Oops...', text: resp_json.msg,
            });
        }
    }
} 