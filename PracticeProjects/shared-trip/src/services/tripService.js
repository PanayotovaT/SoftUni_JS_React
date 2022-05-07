import * as requester from './requester';

const baseUrl = 'http://localhost:3030/data/trips';

export const getAll = async () => await requester.get(baseUrl);

export const getOne = async (id) => await requester.get(`${baseUrl}/${id}`);

export const create = async (trip) => await requester.post(baseUrl, trip);

export const deleteItem = async (id) => await requester.del(`${baseUrl}/${id}`);

export const update = async (id, trip) => await requester.put(`${baseUrl}/${id}`, trip);

export const getMyTrips = async (userId) => await requester.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);