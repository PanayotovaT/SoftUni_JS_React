import { request } from './requester';
// const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore'
const baseUrl = 'http://localhost:3030/data'

export const getAll = async () => {

    let pets = await request(`${baseUrl}/pets`);
    return pets;

};

export const getOne = async (petId) => {

    let res = await fetch(`${baseUrl}/pets/${petId}`);
    const pet = res.json();
    console.log(pet);
    return pet;
}

export const create = async (pet, token) => {
    const response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...pet, likes: [] })
    });

    const result = await response.json();
    return result;
}

export const deleteItem = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    }).then(res => res.json());
}