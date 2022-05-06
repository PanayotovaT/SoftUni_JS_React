import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as petService from '../../services/petService';
import Icon from './Icon/Icon';
import CategoryPetList from '../PetList/CategoryPetList';
import PetList from '../PetList/PetList';

const Home = () => {
    // console.log(process.env.NODE_ENV);
    // throw new Error('Error....');
    const [pets, setPets] = useState([]);
    useEffect(() => {
        petService.getAll()
            .then(result => {
                    setPets(result);
              
            }).catch(err => {
                console.log('err');
                console.error(err.message)
                return;
            })
            
    }, []);
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <section className="type-section">
                <h3>Categories</h3>
                <Link className="button type" to="">All</Link>
                <Link className="button type" to="cat">Cat</Link>
                <Link className="button type" to="dog">Dog</Link>
                <Link className="button type" to="horse">Horse</Link>
            </section>
            <section>
                <Routes>
                    <Route path="/" element={<PetList pets={pets} />} />
                    <Route path="/dog" element={<CategoryPetList type="dog" />} />
                    <Route path="/horse" element={<CategoryPetList type="horse" />} />
                    <Route path="/cat" element={<CategoryPetList type="cat" />} />
                </Routes>
            </section>
            <Icon />
        </section>
    );
};

export default Home;
