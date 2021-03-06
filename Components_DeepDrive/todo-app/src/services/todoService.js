const API_URL = 'http://localhost:3030/jsonstore';


// export const createTodo = (todo) => {
//     return fetch(`${API_URL}/todo`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(todo)
//     })
//         .then(response => response.json());
// }

export const createTodo = async (todo) => {
    let response = await fetch(`${API_URL}/todo`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    });

    let data = await response.json();
    return data;
}

export const deleteTodo = async (id) => {
    try {
        let response = await fetch(`${API_URL}/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        let result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }

}