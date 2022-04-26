const baseURl = 'http://localhost:3030/users'

export const login = async (email, password) => {

    const response  = await fetch(`${baseURl}/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    const result = await response.json();

    if(response.ok) {
        console.log(result);
        return result;
    } else {
        throw result.message;
    }
    
} 

export const register = async (email, password) => {

    const response = await fetch(`${baseURl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    const result = await response.json();

    if(response.ok) {
        return result;
    } else {
        throw result;
    }
}