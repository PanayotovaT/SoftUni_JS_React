import * as requester from './requester';

const baseUrl = 'http://localhost:3030/data/buddies';

export const joinTrip = async (tripId, userId ) => await requester.post(baseUrl, {tripId, userId});
export const getBuddies = async (tripId) =>{  
    
    const data = await requester.get(`${baseUrl}?select=userId&where=tripId%3D%22${tripId}%22`);
    console.log(data);
    return data.map(x => x.userId);
}


