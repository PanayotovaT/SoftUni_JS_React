import { get, post } from './requesterer';

const baseUrl = 'http://localhost:3030/data';

export const getLikes = async (id) =>{ 
    const data = await get(`${baseUrl}/likes?where=filmId%3D%22${id}%22&select=_ownerId`);
    console.log(data)
    return data.map(x => x._ownerId);
};
export const createLike = async (data) => await post(`${baseUrl}/likes`, data);
