import * as request from './requester';
const baseUrl = 'http://localhost:3030/users';

export const register = async ( email, password, firstName, lastName) => {

   const response =  await request.post(`${baseUrl}/register`, {email, password, firstName, lastName});
   return response;
}

export const login = async (email, password) => {
    const response  =  await request.post(`${baseUrl}/login`, {email, password});
    return response;
}

export const logout = async () => {
    const response = await request.get(`${baseUrl}/logout`);
    return response;
}