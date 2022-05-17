import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const register = async (name, email, password) => await request.post(`${baseUrl}/register`, { name, email, password });


export const login = async (email, password) => await request.post(`${baseUrl}/login`, {email, password});


export const logout = async () => await request.get(`${baseUrl}/logout`);
