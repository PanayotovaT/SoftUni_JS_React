import { NavLink } from "react-router-dom";

import './Header.css';
import { useAuthContext } from '../../contexts/AuthContext';


const Header = () => {
    const { user } = useAuthContext();

    const isActive = ({ isActive }) => isActive ? 'isActive' : '';
    const userLinks = (
        <>
            <li><NavLink to="/create" className={isActive} >Create Post</NavLink></li>
            <li><NavLink to="/my-posts" className={isActive}>Posts of {user.email}</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>

        </>
    );

    const guestLinks = (
        <>
            <li><NavLink to="/register" className={isActive}>Register</NavLink></li>
            <li><NavLink to="/login" className={isActive}>Login</NavLink></li>
        </>
    )

    return (
        <nav>
            <img src="/img/logo.png" alt="logo" />

            <ul className="menu">
                <li><NavLink to="/" className={isActive}>Home</NavLink></li>
                <li><NavLink to="/dashboard" className={isActive}>All Posts</NavLink></li>
                {user.email 
                    ? userLinks
                    : guestLinks
                }
            </ul>

        </nav>
    );
}

export default Header;