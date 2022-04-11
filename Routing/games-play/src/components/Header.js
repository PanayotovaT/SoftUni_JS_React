import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
   let activeLinkStyles = {
    //    fontSize: '20px',
       color: 'yellow',
       fontWeight: 'bold',
       textTransform: 'uppercase'
   }
    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <NavLink activeStyle={activeLinkStyles} to="/games">All games</NavLink>
                <div id="user">
                    <NavLink activeStyle={activeLinkStyles} to="/create">Create Game</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink  activeClassName="active-navigatio-link" to="/login">Login</NavLink>
                    <NavLink  activeClassName="active-navigatio-link" to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;