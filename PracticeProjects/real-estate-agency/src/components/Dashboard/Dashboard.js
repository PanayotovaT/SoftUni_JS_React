import { useState, useEffect} from 'react';
import useEstate from '../../hooks/useEstate';

import DashboardCard from './DashboardCard';
import * as estateService from '../../services/estateService';

const Dashboard = () => {
    const [estates, setEstates] = useEstate([]);

    useEffect (() => {
        estateService.getAll()
            .then(res => {
                setEstates(res);
            })
            .catch(err => {
                console.error(err.message);
                return;
            })
    }, []);

    return (
        <section id="all-listings">
        <h1>Apartments for recents</h1>


        <div className="card">
            <h3>Sunhouse C21</h3>
            <p>Spacious dining room, remodel kitchen and wonderful deeded walk-out deck. </p>
            <div className="cta-container"><Link to="/details/123" className="det-link">Details</Link></div>
            <div className="card_circle"><img src="/images/apartments.jpg" alt="card-circle" /></div>

        </div>

        <div className="no-data-listing">
            <p className="no-offer">There are no housing offers found...</p>
        </div>

    </section>
    );
}

export default Dashboard;