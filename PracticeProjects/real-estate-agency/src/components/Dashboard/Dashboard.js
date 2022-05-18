import { useState, useEffect } from 'react';

import DashboardCard from './DashboardCard';
import * as estateService from '../../services/estateService';

const Dashboard = () => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
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
            {estates.length > 0
                ? estates.map(x => <DashboardCard key={x._id} card={x} />)
                : (
                    <div className="no-data-listing">
                        <p className="no-offer">There are no housing offers found...</p>
                    </div>
                )

            }

        </section>
    );
}

export default Dashboard;