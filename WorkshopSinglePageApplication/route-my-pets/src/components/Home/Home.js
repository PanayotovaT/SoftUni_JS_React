import { useEffect, useState } from 'react';

import * as petService from '../../services/petService';
import PetCard from './PetCard';

const Home = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            })
    }, []);
console.log(pets);
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">
                {pets.map(x => <PetCard key={x._id} pet={x} / >)}
            </ul>
            <p className="no-pets">No pets in database!</p>
        </section>
    );
};

export default Home;
