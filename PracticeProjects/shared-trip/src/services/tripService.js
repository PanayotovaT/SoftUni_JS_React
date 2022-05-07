import * as requester from './requester';

const baseUrl = 'http://localhost:3030/data/trips';

export const getAll = async () => await requester.get(baseUrl);

export const getOne = async (id) => await requester.get(`${baseUrl}/${id}`);

export const create = async (trip) => await requester.post(baseUrl, trip);

export const deleteItem = async (id) => await requester.del(`${baseUrl}/${id}`);

export const update = async (id, trip) => await requester.put(`${baseUrl}/${id}`, trip);

export const getMyTrips = async (userId) => {
    try {
        const response = await fetch(`${baseUrl}`);
        if (response.ok) {
            const result = (await response.json()).filter(x => x._ownerId === userId);
            return result;
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        console.log(err.message)
        return [];
    }
}