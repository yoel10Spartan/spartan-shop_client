import React from 'react'

export const NotFound = ({ text }) => {
    return (
        <div style={{
            width: '100%',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img 
                src='https://static.thenounproject.com/png/2247019-200.png'
            />
            <p style={{
                color: '#D35400'
            }}>
                { text }
            </p>
        </div>
    )
}
