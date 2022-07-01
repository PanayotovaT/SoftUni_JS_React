import { post } from "./requesterer";

const baseUrl = 'http://localhost:3030/users';

export const login = async (username, password) => await post(`${baseUrl}/login`, {username, password});


export const register  = async (username, password) => await post(`${baseUrl}/register`, {username, password});

