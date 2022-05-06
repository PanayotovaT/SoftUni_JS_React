import { useState, useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import * as petService from '../../services/petService';
import PetList from '../PetList/PetList';

const MyPets = () => {
    const [pets, setPets] = useState([]);
    const {user} = useAuthContext();

    useEffect(() => {
        petService.getMyPets(user._id)
            .then(data => {
                setPets(data);
            })
    }, [user._id]);

    return (
        <section id="my-pets-page" className="my-pets">
            <h1>My Pets</h1>
            <PetList pets={pets} />

            <p className="no-pets">No pets in database!</p>
        </section>
    );
};

export default MyPets;