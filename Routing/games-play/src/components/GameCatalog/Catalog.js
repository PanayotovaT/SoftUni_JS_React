import { useEffect, useState, lazy, Suspense } from 'react';
import * as gameService from '../../services/gameService';
// import GameCard from './GameCard';
const GameCard = lazy(() => import('./GameCard'))

const Catalog = ({
}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            gameService.getAll().then(result => {
                setGames(result);
            });
        }, 1000)
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            <Suspense fallback={<p>Loading &hellip;</p>}>
            {games.length > 0
                ? games.map(x => <GameCard key={x._id} game={x}  />)
                : <h3 className="no-articles">No articles yet</h3>
            }
            </Suspense>
        </section>
    );
};

export default Catalog;