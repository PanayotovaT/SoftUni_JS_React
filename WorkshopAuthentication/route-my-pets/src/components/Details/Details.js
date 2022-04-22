import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import * as petService from '../../services/petService';


const Details = () => {
    const [pet, setPet] = useState({});
    let { petId } = useParams();
    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, []);


    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} alt="pet" /></p>
                <div className="actions">
                    <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
                    <Link className="button" to={`/delete/${pet._id}`}>Delete</Link>

                    <Link className="button" to={`/like/${pet._id}`}>Like</Link>

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" alt="" />
                        <span id="total-likes">Likes: 0</span>
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