import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as tripService from '../../services/tripService';
import { AuthContext } from '../../contexts/AuthContext';



const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [trip, setTrip] = useState({});
    const id = useParams().carId;

    useEffect(() => {
        tripService.getOne(id)
            .then(trip => {
                setTrip(trip);
            })
    }, [id]);

    const deleteHandler = (e) => {
        e.preventDefault();
        tripService.deleteItem(id, user.accessToken)
            .then(res => {
                navigate('/')
            })
    }

    const ownerButtons = (
        <>
            <Link to={`/delete/${trip._id}`} className="btn btn-danger" onClick={deleteHandler}>Delete this trip</Link>
            <Link to={`/edit/${trip._id}`} className="btn btn-warning">Edit this trip</Link>
        </>
    );

    const guestButtons = (
        <>
            <a href={`/join/${trip._id}`} className="btn btn-join">Join now, {trip.seats} seats left!</a>
            <span className="btn btn-info">Already joined. Don't be late!</span>
            <span className="btn btn-secondary">No seats available! [0]</span>
        </>
    )
    return (
        <section className="py-5 details" id="trip-details-page">
            <div className="container">
                <div className="destination">
                    <div>
                        <span className="icon"><i className="fas fa-map-marked-alt"></i></span>
                        <h5> from <span>{trip.startPoint}</span> to <span>{trip.endPoint}</span> </h5>
                    </div>
                    <div>
                        <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                        <h5> <span>{trip.date}</span> at <span>{trip.time}</span> </h5>
                    </div>
                </div>
                <p className="line"></p>
                <div className="buddies-info">
                    <i className="fas fa-users buddies"></i>
                    <h5>Shared trip Buddies</h5>
                    <div>
                        {trip.buddies?.length > 0
                            ? <p>{trip.buddies.join(', ')}</p>
                            : <p>there are no buddies yet...</p>
                        }


                    </div>
                    <h5>Driver: <span>{user.email}</span> </h5>
                </div>
                <p className="line"></p>
                <h5 className="brand">Car Brand: <span className="lead">{trip.brand}</span></h5>
                <div className="trip-info">
                    <div>
                        <img className="img-fluid rounded"
                            src={trip.imageUrl}
                            alt="car-image" />
                    </div>
                    <div className="trip-desc">
                        <h5>Information about the trip</h5>
                        <textarea className="lead"
                            disabled defaultValue={trip?.description} />
                        <h5>Price: <span className="lead">{trip.price}</span> BGN</h5>

                        <div className="actions">
                            {user._id == trip._ownerId
                                ? ownerButtons
                                : guestButtons
                            }


                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;