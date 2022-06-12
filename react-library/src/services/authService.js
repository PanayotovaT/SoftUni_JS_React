const baseUrl = 'http://localhost:3030/users';

export const register = async (email, gender, password) => {
    try {
        let response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, gender, password })
        });
        const result = await response.json();
        if (result.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        console.log(err);
        return;
    }

}

export const login = (email, password) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (result.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        console.log(err);
        return;
    }
}

export const getUser = () => localStorage.getItem('username')

export const isAuthenticated = () => Boolean(getUser());

export const logout = () => {

}