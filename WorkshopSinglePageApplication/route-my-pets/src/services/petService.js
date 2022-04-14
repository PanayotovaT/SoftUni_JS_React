const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore'

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);
    let result = await response.json();
    let pets = Object.values(result);

    console.log(pets);
    return pets;
};

export const getOne = async (petId) => {
    let response = await fetch(`${baseUrl}/pets/${petId}`);
    let pet = await response.json();

    return pet;
}