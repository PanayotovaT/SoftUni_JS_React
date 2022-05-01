import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import * as petService from '../../services/petService';
import { AuthContext } from '../../contexts/AuthContext';

const Details = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState({});
    let { petId } = useParams();
    useEffect(() => {
        petService.getOne(petId)
            .then(result => { 
                setPet(result);
            })
    }, [petId]);

    const deleteHandler = (e) => {
        e.preventDefault();
        petService.deleteItem(petId, user.accessToken)
            .then(res => {
                navigate('/shared-trips');
            });
    }

    const editHandler = () => {

    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
            <Link className="button" to={`/delete/${pet._id}`} onClick={deleteHandler}>Delete</Link>
        </>
    );
    const publicButtons = (
        <Link className="button" to={`/like/${pet._id}`}>Like</Link>
    );

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} alt="pet" /></p>
                <div className="actions">
                    {user._id && (user._id == pet._ownerId
                        ? ownerButtons
                        : publicButtons
                    )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" alt="" />
                        <span id="total-likes">Likes: {pet.likes?.length}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>

    );
};

export default Details;