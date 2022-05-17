import { response } from 'express';
import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const register = async (name, username, password) => await request.post(`${baseUrl}/register`, { name, username, password });


export const login = async (username, password) => await request.post(`${baseUrl}/login`, {username, password});


export const logout = async () => await request.get(`${baseUrl}/logout`);
