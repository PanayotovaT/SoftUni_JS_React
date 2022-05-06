import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, petId) => request.post(`${baseUrl}/likes`, { userId, petId });

export const getCount = (petId) => {
    return request.get(`${baseUrl}/likes?where=petId%3D%22${petId}%22`)
        .then(res => res.length);
}