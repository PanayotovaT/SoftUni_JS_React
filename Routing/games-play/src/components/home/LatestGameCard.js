import { Link } from "react-router-dom";

const LatestGameCard = ({
    game,
    navigationChangeHandler
}) => {
    const onDetailsClick = (e) => {
        e.preventDefault();
        navigationChangeHandler(`/details/${game._id}`);
    }
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={game.imageUrl} alt="" />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <Link
                    to={`/details/${game._id}`}
                    className="btn details-btn"
                    onClick={onDetailsClick}
                >
                    Details
                </Link>
            </div>
        </div>
    );
}

export default LatestGameCard;