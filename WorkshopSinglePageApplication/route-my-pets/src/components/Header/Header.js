import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const isActive = ({isActive}) => "nav-link" + (isActive ? " isActive" : "")
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <NavLink to="/">Dashboard</NavLink>
                    <div id="guest">
                        <NavLink className={isActive, "button"}  to="/login">Login</NavLink>
                        <NavLink className={isActive, "button"} to="/register">Register</NavLink>
                    </div>
                    <div id="user">
                        <span>Welcome, ...email</span>
                        <NavLink className={isActive, "button"} to="/my-pets">My Pets</NavLink>
                        <NavLink className={isActive, "button"} to="/create-pet">Add Pet</NavLink>
                        <NavLink className="button" to="/logout">Logout</NavLink>
                    </div>
                </section>
            </nav>
        </header>
    );
};

export default Header;