import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link  } from 'react-router-dom';

import './Details.css'
import * as petService from '../../services/petService';
import * as likeService from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import ConfirmDialog from '../../Common/ConfirmDialog';
import { usePetState } from '../../hooks/usePetState';

const Details = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext()
    let { petId } = useParams();
    const [pet, setPet] = usePetState(petId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        likeService.getCount(petId)
            .then(likeCount => {
                setPet(state => ({...state, likes:likeCount}))
            })
    }, [petId, setPet]);

    const deleteHandler = (e) => {
        e.preventDefault();
        petService.deleteItem(petId, user.accessToken)
            .then(res => {
                navigate('/home');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }
    // const editHandler = () => {

    // }

    const likeButtonClick =(e) => {
        e.preventDefault();
        likeService.like(user._id, petId)
            .then(res => {
                setPet((s) => ({...s, likes: s.likes + 1}));
                addNotification('Successfully liked a pet', types.success)

            });

       
    }

    const ownerButtons = (
        <>
            <Link className="button details-btn" to={`/edit-pet/${pet._id}`}>Edit</Link>
            <Link className="button" to={`/delete/${pet._id}`} onClick={deleteClickHandler}>Delete</Link>
        </>
    );
    const publicButtons = (
        <Link className="button" to={`/like/${pet._id}`}  onClick={likeButtonClick} >Like</Link>
    );

    return (
        <>

            <ConfirmDialog className="modal" show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
            <section id="details-page" className="details">
                <div className="pet-information">
                    <h3>Name: {pet.name}</h3>
                    <p className="type">Type: {pet.type}</p>
                    <p className="img"><img src={pet.imageUrl} alt="pet" className="img-details" /></p>
                    <div className="actions">
                        {user._id && (user._id === pet._ownerId
                            ? ownerButtons
                            : publicButtons
                        )}

                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" alt="" />
                            <span id="total-likes">Likes: {pet.likes}</span>
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