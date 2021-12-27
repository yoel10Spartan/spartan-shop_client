import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { FormRegister } from '../forms/login/FormRegister';
import { FormLogin } from '../forms/login/FormLogin';
import { initFormLogin, initFormRegister } from '../../helpers/formLauncher';
import { activateAccount, startLogin, startSignUp } from '../../actions/auth';
import { 
    Button, 
    CardLogin, 
    ContainerLogin, 
    FormContainer,
    Overlay, 
    OverlayContainer, 
    OverlayPanel, 
    TextLogin, 
    TitleLogin 
} from '../../styledComponents/authStyles';

export const AuthScreen = () => {

    const dispatch = useDispatch();
    const [ panel, setPanel ] = useState( false );
    const [ 
        valuesLogin, 
        handleInputChangeLogin, 
        resetLogin 
    ] = useForm(initFormLogin);
    const [ 
        valuesRegister, 
        handleInputChangeRegister, 
        resetRegister 
    ] = useForm(initFormRegister);

    // ====================================================
    // Wait for the value of the query user_id and activate the account
    const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	}
	
    const query = useQuery();
    
    const user_id = query.get('user_id');
	
    useEffect(() => {
		if( user_id ){
			dispatch( activateAccount( user_id ) );
		}
	}, [ user_id, dispatch ]);
    // ====================================================

	const handleSignIn = ( data ) => {
		dispatch( startLogin( data ) );
	}

    const handleSignUp = ( data ) => {
		dispatch( startSignUp( data ) );
	}
    
    const handleActivePanel = () => {
        setPanel( !panel );
	}
    

    return (
        <CardLogin>
            <ContainerLogin reverse={ panel }>

                <FormContainer className='sign-up-container'>
                    <FormRegister 
						values={ valuesRegister } 
						handlers={ [ handleInputChangeRegister, resetRegister ] }
						callBack={ handleSignUp }
					/>
                </FormContainer>
                
                <FormContainer className='sign-in-container'>
                    <FormLogin
                        values={ valuesLogin } 
                        handlers={ [ handleInputChangeLogin, resetLogin ] } 
                        callBack={ handleSignIn }
                    />
                </FormContainer>
                
                <OverlayContainer className='overlay__container'>
                    <Overlay className='overlay'>

                        <OverlayPanel className='overlay-left'>
                            <TitleLogin>Welcome Back!</TitleLogin>
                            <TextLogin>
                                To keep connected with us please login with your personal info
                            </TextLogin>
                            <Button ghost onClick={ handleActivePanel }>Sign In</Button>
                        </OverlayPanel>
                        
                        <OverlayPanel className='overlay-right'>
                            <TitleLogin>Hello, Friend!</TitleLogin>
                            <TextLogin>
                                Enter your personal details and start journey with us
                            </TextLogin>
                            <Button ghost onClick={ handleActivePanel }>Sign Up</Button>
                        </OverlayPanel>
                    
                    </Overlay>
                </OverlayContainer>
            </ContainerLogin>
        </CardLogin>
    )
}