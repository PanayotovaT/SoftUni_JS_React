import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as tripService from '../../services/tripService';
import TripInfo from './TripInfo/TripInfo';


const Profile = () => {
    const [trips, setTrips] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(()=> {
        tripService.getMyTrips(user._id)
            .then(myTrips => {
                setTrips(myTrips);
            })
    }, [user._id]);

    return (
        <section className="profile col-md-6 text-center col-lg" id="profile-page">
        <div className="profile-container">
            <img className="profile-img" src={`/images/${user.gender}.png`} alt="profile" />
            <p>Email: <span>{user.email}</span></p>
        </div>
        <div className="profile-info">
            <p>Trips History: <span>{trips.length}</span> counts</p>

            <div className="trips-info">
             
             {trips.length > 0
                ?   trips.map(x => <TripInfo key={x._id} trip={x} />)
                :  <p>there are no offer trips yet...</p>
             }
               
            </div>

        </div>
    </section>
    )
}

export default Profile;