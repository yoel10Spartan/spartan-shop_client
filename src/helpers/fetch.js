const url_data = process.env.REACT_APP_API_URL;

export const fetchLogin = ( endPoint, data, method ) => {
    const url = `${url_data}${endPoint}`;
    const form_data = new FormData();
    form_data.append( 'email_user', data.email_user );
    form_data.append( 'password_user', data.password_user );
    
    return fetch( url, {
        method,
        body: form_data
    });
}

export const fetchTokenLessWithData = ( endPoint, data, method ) => {
    const url = `${url_data}${endPoint}`;
    return fetch( url, {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify( data )
    });
}

export const fetchTokenLess = ( endPoint, method ) => {
    const url = `${url_data}${endPoint}`;
    return fetch( url, {
        method
    });
}

export const fetchWithToken = ( endPoint, method ) => {
    const url = `${url_data}${endPoint}`;
    const token = localStorage.getItem('token') || '';
    return fetch( url, {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const fetchWithTokenAndData = ( endPoint, method, data ) => {
    const url = `${url_data}${endPoint}`;
    const token = localStorage.getItem('token') || '';
    return fetch( url, {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
            'token_validate': token
        },
        body: JSON.stringify( data )
    });
}