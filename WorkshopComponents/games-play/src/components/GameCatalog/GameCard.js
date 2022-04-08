import GameDetails from "../GameDetails";

const GameCard = ({
    game
}) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} alt="image" />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <a href="/details/" className="details-button">Details</a>
            </div>

        </div>
    );
};

export default GameCard;