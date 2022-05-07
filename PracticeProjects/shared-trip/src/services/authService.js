import * as requester from './requester';

const baseUrl = 'http://localhost:3030/users'

export const login = async (email, password) => await requester.post(`${baseUrl}/login`, {email, password});



export const register = async (email, password, gender) => await requester.post(`${baseUrl}/register`, {email, password, gender});

export const logout = (token) => {
    return fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    })
}