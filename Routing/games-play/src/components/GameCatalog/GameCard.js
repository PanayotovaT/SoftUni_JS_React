import { Link } from "react-router-dom";
const GameCard = ({
    game,
    navigationChangeHandler
}) => {
    const onDetailsClick = (e) => {
        e.preventDefault();
        navigationChangeHandler(`/details/${game._id}`)
    }

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} alt="image" />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <Link to={`/details/${game._id}`} className="details-button" onClick={onDetailsClick}>Details</Link>
            </div>

        </div>
    );
};

export default GameCard;