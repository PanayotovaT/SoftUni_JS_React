import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/estates'

export const getAll = async () => await request.get(baseUrl);

export const getOne = async (id) => await request.get(`${baseUrl}/${id}`);

export const create = async (data) =>  await request.post(baseUrl, data);

export const update  =  async (id, data) => await request.put(`${baseUrl}/${id}`, data);

export const deleteItem = async (id) => await request.del(`${baseUrl}/${id}`);

export const searchItems = async (searchedData) => {

    const queryString = encodeURI(`?where=name LIKE "${searchedData}"`);
    return await request.get(`${baseUrl}${queryString}`);
}