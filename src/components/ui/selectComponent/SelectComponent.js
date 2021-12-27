import React from 'react';
import './SelectComponent.css';

export const SelectComponent = ({ options = [], handleChange, name, defaultValue }) => {  
    return (
        <select 
            name={ name } 
            required 
            className='select' 
            defaultValue={ defaultValue }
            onChange={ handleChange }
        >
            <option>{ defaultValue }</option>
            {
                options.map( option => (
                    <option key={ option } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}
