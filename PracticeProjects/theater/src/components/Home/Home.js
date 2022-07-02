import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import useFilms from '../../hooks/useFilms';

import GuestCard from './GuestCard';
import UserCard from './UserCard';


const Home = () => {
    const { isAuthenticated } =  useAuthContext();
    const [films, setFilms] = useFilms();
    console.log(films);

    return (
        <>
            <section className="container">
                <h1>My Theater Info</h1>
                <p>Lorem reprehenderit nostrud do do ut ad irure aliquip anim adipisicing nulla ullamco. Non mollit
                    Lorem sunt proident nostrud dolore est minim reprehenderit adipisicing consectetur dolore.
                    Nostrud id amet ad irure irure aute ad veniam deserunt mollit sint pariatur. Velit quis amet
                    aliquip tempor. Dolore culpa deserunt proident nostrud amet consectetur.
                    Exercitation exercitation pariatur deserunt duis. Elit duis aute do ullamco fugiat magna officia
                    ad. Pariatur nulla ut pariatur Lorem pariatur incididunt eu excepteur sint qui. Amet esse et
                    eiusmod officia fugiat aliquip ullamco laboris sint cillum cillum. Elit proident mollit officia
                    tempor aliquip non ea occaecat sunt eiusmod enim nulla anim. Voluptate laborum consequat elit
                    quis cupidatat tempor ad laboris duis non eiusmod.</p>
            </section>
            <section>
                <div className="aux">
                    <h1>Available Plays</h1>
                    <div className="home-buttons">
                        <Link className="btn create-play" to="/create">Create Theater</Link>
                        <Link className="btn create-play" to="/sort-by-date">Sort by Date</Link>
                        <Link className="btn create-play" to="/sort-by-likes">Sort by Likes</Link>
                    </div>
                </div>
                <div className="theaters-container">
                    {films.length > 0 
                        ?  (films.map(x => isAuthenticated 
                                ? <UserCard key={x._id} card={x} />
                                : <GuestCard key={x._id} card={x} />
                        ))
                        : 'No films in the database!'
                    }
                  

                </div>
            </section>
        </>
    );
}

export default Home;