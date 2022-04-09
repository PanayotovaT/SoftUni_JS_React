const baseUrl = 'http://localhost:3030/data';

export function getAll() {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`)
        .then(response => response.json());

}

export function getOne(id) {
    return fetch(`${baseUrl}/games/${id}`)
        .then(response => response.json());
}