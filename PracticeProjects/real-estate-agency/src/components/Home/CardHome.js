import { Link } from 'react-router-dom';

const CardHome = ({ card }) => {

    return (
        <div className="card-home">
            <h2>{card.name}</h2>
            <div className="cta-container"><Link to={`/details/${card._id}`} className="details-link">Details</Link></div>
            <div className="card_image"><img src={card.imageUrl} alt="test" /></div>

        </div>
    )
}

export default CardHome;