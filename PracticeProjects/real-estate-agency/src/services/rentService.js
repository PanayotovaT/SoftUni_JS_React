import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/rents';

export const getRents = async ( estateId ) => await request.get(`${baseUrl}?where=estateId%3D%22${estateId}%22`);

export const rentEstate = async (data) => await request.post(baseUrl, data);
