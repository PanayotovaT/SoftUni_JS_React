import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    return (
        <div className="flip flip-vertical">
            <div className="front">
                <img src={card.imageUrl} alt="post" />
                <h1 className="text-shadow">Keyword: {card.keyword}</h1>
            </div>
            <div className="back">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <Link to={`/details/${card._id}`} className="details">Details</Link>
            </div>
        </div>
    );
}

export default Card;