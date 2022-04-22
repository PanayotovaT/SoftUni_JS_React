export const login = async (email, password) => {
    let response = await fetch('http://localhost:3030/users/login', {
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
    localStorage.removeItem('username')
}