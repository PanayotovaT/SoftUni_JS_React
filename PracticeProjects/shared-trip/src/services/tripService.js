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

export const create = async (trip, token) => {
    const response  = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(trip)
    });
    const result = await response.json();
    return result;
}