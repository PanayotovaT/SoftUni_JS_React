import { get, post, put, del} from './requesterer';

const baseUrl = 'http://localhost:3030/data';

export const getAll = async () =>{
    try{
        return Object.values(await get(`${baseUrl}/films`))
    } catch(err) {
        return [];
    }
};

export const getOne = async (id) => await get(`${baseUrl}/films/${id}`);

export const createFilm = async (data) => await post(`${baseUrl}/films`, data );

export const updateFilm = async (id, data) => await put(`${baseUrl}/films/${id}`, data);

export const deleteFilm = async (id) => await del(`${baseUrl}/films/${id}`);