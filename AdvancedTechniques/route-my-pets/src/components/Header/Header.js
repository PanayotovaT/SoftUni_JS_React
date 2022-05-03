import './Header.css';
import {  NavLink } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {

    const {user} = useAuthContext();
    const isActive = ({ isActive }) => "nav-link" + (isActive ? " isActive" : "")

    let guestNavigation = (
        <div id="guest">
            <NavLink className={isActive + " button"} to="/login">Login</NavLink>
            <NavLink className={isActive + " button"} to="/register">Register</NavLink>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {user.email}</span>
            <NavLink className={isActive +" button"} to="/my-pets">My Pets</NavLink>
            <NavLink className={isActive + " button"} to="/create-pet">Add Pet</NavLink>
            <NavLink className="button" to="/logout">Logout</NavLink>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <NavLink to="/home">Dashboard</NavLink>

                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }

                </section>
            </nav>
        </header>
    );
};

export default Header;