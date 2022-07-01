import { get, post } from "./requesterer";

const baseUrl = 'http://localhost:3030/users';

export const login = async (username, password) => await post(`${baseUrl}/login`, {username, password});


export const register  = async (email, password) => await post(`${baseUrl}/register`, {email, password});

export const logout = async () => await get(`${baseUrl}/logout`);