import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TripCard from './TripCard/TripCard';
import * as tripService from '../../services/tripService';

const SharedTrips = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        tripService.getAll()
            .then(data => {
                setTrips(data);
            })
    }, [])
    return (
        <section className="container" id="shared-trips-page">
            <header className="trip">
                <h1>Welcome Sharetripers!</h1>
                <p className="lead">Sharedtrip is the best way to road across the country.</p>
                <p className="lead">Find yours Sharedtrip's buddies, when you share with us yours trip plans and let the
                    exploration begin!</p>
            </header>
            <div className="row text-center">

                {trips.length > 0
                    ? trips.map(x => <TripCard key={x._id} trip={x} />)
                    : (<div className="no-trips">
                        <img src="https://www.stagweb.co.uk/img/activities/big/sexyhitchhiker1.jpg" />
                        <p className="lead">Hitchhiker time...</p>
                    </div>)
                }

            </div>
        </section>
    );
}

export default SharedTrips;