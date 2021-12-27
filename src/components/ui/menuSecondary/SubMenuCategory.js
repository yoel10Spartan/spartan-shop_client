import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SubMenu } from '../../../styledComponents/secondaryStyles';

export const SubMenuCategory = () => {

    const { categories } = useSelector(state => state.artwork);

    return (
        <SubMenu className='submenu'>
            {
                categories.map( item => (
                    <Link style={stylesLink} key={ item.id } to={`/spartan_books/client/artwork_by_category/${item.id}`}>
                        { item.category }
                    </Link>
                ))
            }
        </SubMenu>
    )
}

const stylesLink = {
    fontSize: '16px',
	fontFamily: 'Open Sans, sans-serif',
	margin: '0 15px 20px 0',
    display: 'flex',
    flexDirection: 'column'
}
