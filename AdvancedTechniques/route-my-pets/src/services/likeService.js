import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, petId) => request.post(`${baseUrl}/likes`, { userId, petId });
