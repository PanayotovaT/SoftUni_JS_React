import * as request from './requester';

const likeUrl = 'http://localhost:3030/data/likes';
const dislikeUrl = 'http://localhost:3030/data/dislike'

// {postId: [{userId, email}]}

export const getAllLikes = async ( postId )  => Object.values(await request.get(`${likeUrl}?where=postId%3D%22${postId}%22`));

export const addLike = async (data ) => await request.post(likeUrl, data);

export const getAllDislikes = async ( postId )  => Object.values(await request.get(`${dislikeUrl}?where=postId%3D%22${postId}%22`));

export const dislike =  async (data) => await request.post(dislikeUrl, data);


