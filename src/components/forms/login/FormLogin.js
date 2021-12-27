import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { Validation } from '../../../helpers/validations';
import { 
    Button,
    FormAuth,
    Input, 
    ItemSocial, 
    SocialContainer, 
    Span, 
    TitleLogin 
} from '../../../styledComponents/authStyles';

const validation = new Validation();

export const FormLogin = ({ values, handlers, callBack }) => {

    const { id_user } = useSelector(state => state.auth.login_information);
    const { loading } = useSelector(state => state.loading);

    const { email_user, password_user } = values;
    const [ handleInputChangeLogin, resetLogin ] = handlers;

    const handleSignIn = ( event ) => {
        event.preventDefault();

        if( !validation.verifyEmailPassword( values ) ){
			return Swal.fire({
				icon: 'error', 
                title: 'Oops...', 
                text: 'Enter valid data!'
			});
		}

        callBack( values );
    }

    useEffect(() => {
        if( !!id_user ){ resetLogin(); }
    }, [ id_user, resetLogin ]);

    return (
        <FormAuth>
            <TitleLogin>Sign in</TitleLogin>
            <SocialContainer>
                <ItemSocial className='social'>
                    <i class='bx bxl-facebook-circle'></i>
                </ItemSocial>
                <ItemSocial className='social'>
                    <i class='bx bxl-google'></i>
                </ItemSocial>
                <ItemSocial className='social'>
                    <i class='bx bxl-microsoft'></i>
                </ItemSocial>
            </SocialContainer>

            <Span>or use your account</Span>
            
            <Input
                type="email" 
                placeholder="Email"
                name='email_user'
                autoComplete='off'
                value={ email_user }
                onChange={ handleInputChangeLogin }	
                style={ styleInput }
            />
            
            <Input
                type="password" 
                placeholder="Password"
                name='password_user'
                value={ password_user }
                onChange={ handleInputChangeLogin }
                style={ styleInput }
            />

            <Button 
                onClick={ handleSignIn }
                disabled={ loading }
            >
                { loading ? 'Loading...' : 'Sign In' }
            </Button>
        </FormAuth>
    )
}

const styleInput = { 
    width: '80%', 
    marginBottom: '15px',
}
