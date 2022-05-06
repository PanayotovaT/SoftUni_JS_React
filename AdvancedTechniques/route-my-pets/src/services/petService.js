import * as request from './requester';
// const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore'
const baseUrl = 'http://localhost:3030/data'

export const getAll = async () => {

    let pets = await request.get(`${baseUrl}/pets`);
    return Object.values(pets);

};

export const getOne = async (petId, signal) => {

    let pet = await request.get(`${baseUrl}/pets/${petId}`, {signal});
    return pet;
}

export const getMyPets = (userId) => request.get(`${baseUrl}/pets?where=_ownerId%3D%22${userId}%22`)

export const create = async (pet, token) => {
    const response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...pet, likes: [] })
    });

    const result = await response.json();
    return result;
}

export const deleteItem = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    }).then(res => res.json());
}

export const update = (petId, pet) => {
    return request.put(`${baseUrl}/pets/${petId}`, pet)
}

