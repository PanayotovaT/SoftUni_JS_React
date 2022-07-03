import { Link } from "react-router-dom";

import './Details.css';
import useFilm from "../../hooks/useFilm";

const Details = () => {
    const [film] = useFilm();

    return (
        <div className="container">

            <section className="details">
                <div className="details-image">
                    <h1>Theater title: {film.title}</h1>
                    <div>
                        <img src={film.imageUrl} alt="random" className="details-img" />
                    </div>

                </div>
                <div className="details-text">

                    <h3>Theater Description</h3>
                    <p>{film.description}</p>
                    <div className="buttons">
                        <Link className="btn delete" to={`/delete/${film._id}`}>Delete</Link>
                        <Link className="btn edit" to={`/edit/${film._id}`}>Edit</Link>
                        <span className="liked">You have already liked this play!</span>
                        <Link className="btn like" to={`/like/${film._id}`}>Like</Link>
                    </div>
                </div>


            </section>


        </div>
    );
}

export default Details;