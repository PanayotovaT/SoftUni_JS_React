import * as requester from './requester';

const baseUrl = 'http://localhost:3030/data/buddies';

export const joinTrip = async (tripId, email ) => await requester.post(baseUrl, {tripId, email});
export const getBuddies = async (tripId) =>{  
    
    const data = await requester.get(`${baseUrl}?select=email&where=tripId%3D%22${tripId}%22`);
    return data.map(x => x.email);
}


