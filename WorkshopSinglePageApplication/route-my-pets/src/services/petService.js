const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore'

export const getAll = async () => {
    try {
        let response = await fetch(`${baseUrl}/pets`);
        let result = await response.json();
        let pets = Object.values(result);
        return pets;
    } catch (err) {
        console.log(err);
        return;
    }

};

export const getOne = async (petId) => {

    let response = await fetch(`${baseUrl}/pets/${petId}`);
    let pet = await response.json();

    return pet;
}

export const create = async (pet) => {
    const response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });

    const result = await response.json();
    return result;
}