import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useEstate from '../../hooks/useEstate';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext } from '../../contexts/NotificationContext';
import * as estateService from '../../services/estateService';
import * as rentService from '../../services/rentService';

const Details = () => {
    const navigate = useNavigate();
    const { estateId } = useParams()
    const [estate] = useEstate(estateId);
    const { user } = useAuthContext();
    const [rents, setRents] = useState([]);
    const { showNotification } = useNotificationContext();
   
    const availableRents = Number(estate.availablePieces) - rents.length;

    useEffect(() => {
        rentService.getRents(estateId)
            .then(res => {
                setRents(res)
            })
            .catch(err => {
                return;
            })

    }, [estateId]);

    const deleteHandler = (e) => {
        e.preventDefault();

        estateService.deleteItem(estateId)
            .then(res => {
                showNotification('You have successfully deleted the estate!')
                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
                return;
            })

    }

    const rentEstateHandler = (e) => {
        e.preventDefault();
        const data = {
            estateId,
            userId: user._id,
            name: user.name
        }
        rentService.rentEstate(data)
            .then(res => {
                showNotification('You have successfully rented the estate!')
                setRents(s => [...s, data]);
            })
            .catch(err => {
                console.log(err);
                return;
            })


    }

    const ownerButtons = (
        <>
            <Link to={`/edit/${estate._id}`} className="edit">Edit</Link>
            <Link to={`/delete/${estate._id}`} className="remove" onClick={deleteHandler}>Delete</Link>
        </>
    );

    const userButtons = (
        <>
            {rents.some(x => x.userId == user._id)
                ? <p className="alRentHome">You have already rent this home</p>
                : (
                    <>
                        {availableRents > 0 
                            ?<Link to={`/rent/${estate._id}`} className="rentHome" onClick={rentEstateHandler}>Rent a home, available {availableRents} housing</Link>
                            : <p className="no-housing">No Housing Available!</p>
                        }
                        
                        
                    </>
                )
            }

        </>
    )

    return (
        <section id="deatils-page">
            <div className="wrapper">
                <div className="product-img">
                    <img src={estate.imageUrl} alt="appartments" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <div className="product-text">
                            <h1>Name: {estate.name}</h1>
                            <h2>Type: {estate.type}</h2>
                            <h4>Year: {estate.year}</h4>
                            <h4>City: {estate.city}</h4>
                            <p>Description: {estate.description}</p>
                            {rents.length > 0
                                ? <p>People rented this housing: {rents.map(x => x.name).join(', ')}</p>
                                : <p>People rented this housing: There are no tenants yet.</p>
                            }
                        </div>
                    </div>

                    <div className="product-btn">
                        {user._id == estate._ownerId
                            ? ownerButtons
                            : userButtons
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;