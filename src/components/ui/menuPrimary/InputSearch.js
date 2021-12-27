import React from 'react';
import { Input, Button } from '../../../styledComponents/authStyles';
import {
    Search, 
    WrapSearch 
} from '../../../styledComponents/primaryStyles';

export const InputSearch = ({values, handle}) => {

    const {search} = values;

    return (
        <WrapSearch style={{zIndex: '10210210'}}>
            <Search>
                <Input 
                    type="text"none
                    placeholder="Look for anything"
                    style={ stylesInput }
                    onChange={handle}
                    name='search'
                    value={search}
                />
                <Button type="submit" style={ stylesButton }>
                    <i className='bx bx-search-alt-2' ></i>
                </Button>
            </Search>
        </WrapSearch>
    )
}

const stylesInput = {
    width: '100%',
    border: '1px solid #000',
    padding: '0 0 0 15px',
    height: '36px',
    outline: 'none',
    background: 'transparent'
}

const stylesButton = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '36px',
    background: '#000',
    color: '#fff',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '20px',
    outline: 'none',
    border: 'none'
}

