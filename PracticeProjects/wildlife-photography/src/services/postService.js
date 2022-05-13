import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/posts';

export const getAll = async () =>await request.get(baseUrl);

export const getOne = async ( postId ) => await request.get(`${baseUrl}/${postId}`);

export const create = async ( data ) => await request.post(baseUrl, data);

export const update = async ( postId, data ) => await request.put(`${baseUrl}/${postId}`, data);

export const deleteItem = async ( postId ) => await request.deleteItem(`${baseUrl}/${postId}`);
