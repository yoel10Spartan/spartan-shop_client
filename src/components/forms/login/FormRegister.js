import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Validation } from '../../../helpers/validations';
import { SelectComponent } from '../../../components/ui/selectComponent/SelectComponent';
import { checkErrors } from '../../../helpers/formLauncher';
import { deleteOkRegister } from '../../../actions/auth';
import { 
    Button, 
    ContainerInput, 
    FormAuth, 
    Input, 
    InputError, 
    TextError, 
    TitleLogin 
} from '../../../styledComponents/authStyles';

const validation = new Validation();

export const FormRegister = ({ values, handlers, callBack }) => {

    const dispatch = useDispatch();
    const { ok } = useSelector(state => state.auth.register_information);
    const [ handleErrors, setHandleErrors ] = useState( checkErrors );
    const { loading } = useSelector(state => state.loading);

    let {
        email_user,
        age_user,
        sexual_gender_user,
        name_user,
        lastname_user,
        password_user,
        phone_number_user
    } = values;
    const [ handleInputChangeRegister, resetRegister ] = handlers;

    const handleSingUp = ( event ) => {
        event.preventDefault();

        const [ modifiedObject, allValid ] = validation.processErrors( { ...values, sexual_gender_user } );

        setHandleErrors( modifiedObject );

        if( allValid ){ callBack( values ); }
    }

    // ============================================
    // The form is restarted and the registration confirmation is changed
    useEffect(() => {
        if( ok ){ resetRegister(); }
        dispatch( deleteOkRegister() );
    }, [ ok, dispatch, resetRegister ])
    // ============================================

    return (
        <FormAuth>
            <TitleLogin>Create Account</TitleLogin>

            <ContainerInput>
                <InputError>
                    <Input
                        type="text"
                        placeholder="Name"
                        name='name_user'
                        value={ name_user }
                        onChange={ handleInputChangeRegister }
                    />
                    { handleErrors.name_user && <TextError>Invalid name</TextError> }
                </InputError>
                <InputError>
                    <Input
                        type="text"
                        placeholder="Lastname"
                        name='lastname_user'
                        value={ lastname_user }
                        onChange={ handleInputChangeRegister }
                    />
                    { handleErrors.lastname_user && <TextError>Invalid last names</TextError> }
                </InputError>
            </ContainerInput>


            <ContainerInput>
                <InputError>
                    <Input
                        type="email"
                        placeholder="Email"
                        className='form_login_input'
                        name='email_user'
                        value={ email_user }
                        onChange={ handleInputChangeRegister }
                    />
                    { handleErrors.email_user && <TextError>Invalid email</TextError> }
                </InputError>
                <InputError>
                    <Input
                        type="number"
                        placeholder="Number Phone"
                        className='form_login_input'
                        name='phone_number_user'
                        value={ phone_number_user }
                        onChange={ handleInputChangeRegister }
                    />
                    { handleErrors.phone_number_user && <TextError>Must contain 10 digits</TextError> }
                </InputError>
            </ContainerInput>

            <ContainerInput inline>
                <InputError>
                    <Input
                        type="password"
                        placeholder="Password"
                        name='password_user'
                        value={ password_user }
                        onChange={ handleInputChangeRegister }
                        style={{ width: '100%' }}
                    />
                    { handleErrors.password_user
                        &&
                    <TextError style={{ margin: 0, padding: 0 }}>
                        6 to 10 characters, and must include uppercase, lowercase, numbers, and special characters
                    </TextError>
                    }
                </InputError>
            </ContainerInput>

            <ContainerInput>
                <InputError>
                    <Input
                        type="number"
                        placeholder="Age"
                        name='age_user'
                        value={ age_user }
                        onChange={ handleInputChangeRegister }
                    />
                    { handleErrors.age_user && <TextError>Minimum 18 maximum 70</TextError> }
                </InputError>
                <InputError>
                    <SelectComponent
                        options={[ 'Man', 'Woman' ]}
                        handleChange={ handleInputChangeRegister }
                        name={ 'sexual_gender_user' }
                        defaultValue={ 'Gender' }
                    />
                    { handleErrors.sexual_gender_user && <TextError>Select your gender</TextError> }
                </InputError>
            </ContainerInput>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <input type='checkbox' style={{
                    marginRight: '10px'
                }} />
                <p style={{
                    fontSize: '15px'
                }}>Aceptar politicas de privacidad</p>
            </div>

            <Button
                onClick={ handleSingUp }
                disabled={ loading }
            >
                { loading ? 'Loading...' : 'Sign Up' }
            </Button>

        </FormAuth>
    )
}
