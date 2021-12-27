import React from 'react'

export const SectionShipping = ({
    free_shipping_artwork
}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <p style={ itemStyles }>
                { Boolean(free_shipping_artwork) && 'Shipping is free,' } arrives in 2 days
            </p>
            <p style={ itemStyles }>
                Free return, you have up to 
                30 days from when you receive it
            </p>
        </div>
    )
}

const itemStyles = {
    marginBottom: '20px',
    width: '100%',
    padding: '15px',
    border: '1px solid #BA4A00',
    borderLeft: 'none',
    borderRight: 'none',
    color: '#641E16',
    fontSize: '15px',
    textAlign: 'center',
    letterSpacing: '2px',
    wordSpacing: '3px'
}