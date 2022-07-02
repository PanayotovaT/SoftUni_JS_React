import { Link } from 'react-router-dom';

const UserCard = ({card}) => {

    return (
        <div>
            <div className="home-image">
                <img src={card.imageUrl}
                    alt="Card cap" />
            </div>
            <div className="info">
                <h4>{card.title}</h4>
                <div className="info-buttons">
                    <Link className="btn details" to={`/details/${card._id}`}>Details</Link>
                    <span className="likes">{card.likes.length} likes</span>
                </div>
            </div>
        </div>
    );
}

export default UserCard;