const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore'

export const getAll = async () => {
   let response = await fetch(`${baseUrl}/pets`);
   let pets = response.json();

   return pets;
};

export const getOne = async (petId) => {
    let response = await fetch(`${baseUrl}/pets/${petId}`);
    let pet = response.json();

    return response;
}