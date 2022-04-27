const baseUrl = 'http://localhost:3030/data/trips'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}`);
    const reuslt = await response.json();
    return reuslt;
}

export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const reuslt = await response.json();
    return reuslt;
}