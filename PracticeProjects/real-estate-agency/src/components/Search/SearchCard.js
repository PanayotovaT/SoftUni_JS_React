import { Link } from 'react-router-dom';

const SearchCard = ({ card }) => {

    return (
        <div className="card">
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            <div className="cta-container"><Link to={`/details/${card._id}`} className="det-link">Details</Link></div>
            <div className="card_circle"><img src={card.imageUrl} alt="card-circle" /></div>
        </div>
    )
}

export default SearchCard;