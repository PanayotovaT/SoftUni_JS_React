import { useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as tripService from '../../services/tripService';
import * as joinTripService from '../../services/joinTripService';
import { AuthContext } from '../../contexts/AuthContext';
import useTrip from '../../hooks/useTrip';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const id = useParams().carId;
    const [trip, setTrip] = useTrip(id);

    useEffect(() => {
        joinTripService.getBuddies(id)
            .then(buddies => {
                setTrip(s => ({ ...s, buddies, availableSeats: Number(s.seats) - buddies.length }));
            })
    }, [id, setTrip]);

    const deleteHandler = (e) => {
        e.preventDefault();
        tripService.deleteItem(id)
            .then(res => {
                navigate('/')
            })
    }

    const joinTripHandler = (e) => {
        e.preventDefault();

        if (trip._ownerId == user._id) {
            console.error('You cannot join your own trip!');
            return;
        }

        if (trip.buddies?.includes(user.email)) {
            console.error('You already joined this trip');
            return;
        }

        if (trip.availableSeats == 0) {
            console.log('No more available seats');
            return;
        }

        joinTripService.joinTrip(id, user.email)
            .then(res => {
                console.log(res);
                setTrip(s => ({ ...s, buddies: [...s.buddies, res.email], availableSeats: s.availableSeats - 1 }));

            })
            .catch(err => {
                return;
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
            {trip.buddies?.includes(user.email)
                ? <span className="btn btn-info">Already joined. Don't be late!</span>
                : (trip.availableSeats > 0
                    ? <button className="btn btn-join" onClick={joinTripHandler} >Join now, {trip.availableSeats} seats left!</button>
                    : <span className="btn btn-secondary">No seats available! [0]</span>
                )
            }

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
                            alt="car" />
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