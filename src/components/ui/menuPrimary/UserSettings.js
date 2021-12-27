import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../../actions/auth';
import { ItemSubMenuUser, MenuUser, SubMenuUser } from '../../../styledComponents/primaryStyles';

export const UserSettings = () => {

    const dispatch = useDispatch();

    const handleSignOff = () => {
        dispatch( startLogout() );
    }

    return (
        <MenuUser>
            <i class='bx bxs-user'></i>
            <SubMenuUser>
                <ItemSubMenuUser>
                    <i 
                        class='bx bxs-user-circle' 
                        style={ stylesIcon }
                    ></i>
                    <Link to='' style={ stylesLink }>
                        Profile
                    </Link>
                </ItemSubMenuUser>

                <ItemSubMenuUser>
                    <i 
                        class='bx bxs-analyse'
                        style={ stylesIcon }
                    ></i>
                    <Link to='' style={ stylesLink }>
                        Setting
                    </Link>
                </ItemSubMenuUser>
                
                <ItemSubMenuUser
                    onClick={ handleSignOff }
                >   
                    <i 
                        class='bx bxs-exit'
                        style={ stylesIcon }
                    ></i>
                    <Link to='' style={ stylesLink }>
                        Sign off
                    </Link>
                </ItemSubMenuUser>
            </SubMenuUser>
        </MenuUser>
    )
}

const stylesLink = {
    margin: '0 0 0 10px',
    color: '#212F3D'
}

const stylesIcon = {
    margin: '0',
    fontSize: '15px',
    color: '#212F3D'
}