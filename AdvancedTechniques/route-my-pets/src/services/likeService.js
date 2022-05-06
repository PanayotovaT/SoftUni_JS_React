import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, petId) => request.post(`${baseUrl}/likes`, { userId, petId });

export const getLikes = (petId) => {
    return request.get(`${baseUrl}/likes?select=userId&where=petId%3D%22${petId}%22`)
        .then(res => {
            return res.map(x => x.userId);
        });
}