import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import './Details.css'
import * as petService from '../../services/petService';
import { useAuthContext } from '../../contexts/AuthContext';

import ConfirmDialog from '../../Common/ConfirmDialog';

const Details = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [pet, setPet] = useState({});
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
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
                navigate('/home');
            });
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }
    const editHandler = () => {

    }

    const ownerButtons = (
        <>
            <Link className="button details-btn" to={`/edit/${pet._id}`}>Edit</Link>
            <Link className="button" to={`/delete/${pet._id}`} onClick={deleteClickHandler}>Delete</Link>
        </>
    );
    const publicButtons = (
        <Link className="button" to={`/like/${pet._id}`}>Like</Link>
    );

    return (
        <>

            <ConfirmDialog className="modal" show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler}/>
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
        </>


    );
};

export default Details;