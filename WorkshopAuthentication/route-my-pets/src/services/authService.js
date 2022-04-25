const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    
    let jsonResult = await response.json();

    if(response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }

};

export const register = async (email, password) => {
    let response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    
    let jsonResult = await response.json();

    if(response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }

};

export const getUser = () => {
   let username = localStorage.getItem('username');
   return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};

export const logout = () => {
    fetch(`${baseUrl}/logout`)
}