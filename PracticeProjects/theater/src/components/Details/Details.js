import { Link } from "react-router-dom";

import './Details.css';
import useFilm from "../../hooks/useFilm";
import { useAuthContext } from "../../contexts/AuthContext";

const Details = () => {
    const [film] = useFilm();
    const { isAuthenticated, user } = useAuthContext();

    const isOwner = user._id == film._ownerId;

    return (
        <div className="container">

            <section className="details details-section">
                <div className="details-image">
                    <h1 className="details-headline">Theater title: {film.title}</h1>
                    <div>
                        <img src={film.imageUrl} alt="random" className="details-img" />
                    </div>

                </div>
                <div className="details-text">

                    <h3 className="details-headline" >Theater Description</h3>
                    <p>{film.description}</p>
                    {isAuthenticated
                        ? (<div className="details-buttons buttons">
                            {isOwner
                                ? (<>
                                    <Link className="btn delete details-btn" to={`/delete/${film._id}`} >Delete</Link>
                                    <Link className="btn edit details-btn" to={`/edit/${film._id}`} >Edit</Link>
                                </>)
                                : (<>
                                    <span className="liked">You have already liked this play!</span>
                                    <Link className="btn like details-btn" to={`/like/${film._id}`} >Like</Link>
                                </>)
                            }


                        </div>)
                        : ''
                    }

                </div>


            </section>


        </div>
    );
}

export default Details;