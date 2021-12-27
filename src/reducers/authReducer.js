import { types } from '../types/types';

const initState = {
    login_information: {
        cheking: true,
        id_user: null,
        name_user: null,
        email_user: null,
        phone_number_user: null
    },
    register_information: {
        ok: false
    }

}

export const authReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        
        case types.authStartLogin:
            return {
                ...state,
                login_information: {
                    cheking: false,
                    id_user: action.payload.id_user,
                    name_user: action.payload.name_user,
                    email_user: action.payload.email_user,
                    phone_number_user: action.payload.phone_number_user
                }
            }

        case types.authStartExit:
            return {
                ...state,
                login_information: {
                    cheking: false, 
                    id_user: null,
                    name_user: null, 
                    email_user: null,
                    phone_number_user: null,
                    login_accepted: false
                }
            }

        case types.authSetOkRegister: 
            return {
                ...state,
                register_information: {
                    ok: true
                }
            }
        
        case types.authDeleteOkRegister:
            return {
                ...state,
                register_information: {
                    ok: false
                }
            }

        default:
            return state;
    }
}