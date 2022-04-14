import { useEffect } from 'react';

import PetCard from './PetCard'; 

const Home = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">
               
            </ul>
            <p className="no-pets">No pets in database!</p>
        </section>
    );
};

export default Home;
