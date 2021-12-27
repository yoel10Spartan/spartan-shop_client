import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '../../../styledComponents/authStyles';
import { UserSettings } from './UserSettings';
import { 
    ContainerMenu, 
    NameUser, 
    NavIcons, 
    Navigation, 
    NavLogo, 
    NavMenu
} from '../../../styledComponents/primaryStyles';
import { InputSearch } from './InputSearch';

export const MenuPrimary = () => {

    const { name_user } = useSelector(state => state.auth.login_information);

    return (
        <Navigation>
            <ContainerMenu>
                <NavMenu>
                    <NavLogo>
                        <Link to='/spartan_books/prinsipal'>SPARTAN</Link>   
                    </NavLogo>

                    <NavIcons>
                        <Link to='/spartan_books/client/shoping_car'>
                            <i className='bx bx-cart'></i>
                        </Link>

                        {
                            name_user 
                                ? <UserSettings /> 
                                : <Link to='/spartan_books/login'>
                                    <Button 
                                        style={ stylesButtonLogin }
                                    >
                                        Log in
                                    </Button>
                                </Link>
                        }
                        
                        <NameUser>
                            { name_user }
                        </NameUser>
                    </NavIcons>
                </NavMenu>
            </ContainerMenu>
        </Navigation>
    )
}

export const stylesButtonLogin = {
    background: 'transparent',
    borderColor: '#000',
    borderRadius: '0',
    color: '#000',
    padding: '10px'
}