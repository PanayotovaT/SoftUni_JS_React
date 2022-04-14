import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = ({
    isAuthenticated,
    username
}) => {
    const isActive = ({ isActive }) => "nav-link" + (isActive ? " isActive" : "")

    let guestNavigation = (
        <div id="guest">
            <NavLink className={isActive, "button"} to="/login">Login</NavLink>
            <NavLink className={isActive, "button"} to="/register">Register</NavLink>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {username}</span>
            <NavLink className={isActive, "button"} to="/my-pets">My Pets</NavLink>
            <NavLink className={isActive, "button"} to="/create-pet">Add Pet</NavLink>
            <NavLink className="button" to="/logout">Logout</NavLink>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <NavLink to="/home">Dashboard</NavLink>
                    {isAuthenticated
                        ? userNavigation
                        : guestNavigation
                    }

                </section>
            </nav>
        </header>
    );
};

export default Header;