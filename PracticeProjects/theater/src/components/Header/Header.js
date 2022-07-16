import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import './Header.css'

const Header = () => {
    const { isAuthenticated } = useAuthContext();
    const isActive = ({isActive}) => isActive ? 'is-active': '';

    const guestLinks = (
        <>
            <li><NavLink to="/login" className={isActive}>Login</NavLink></li>
            <li><NavLink to="/register" className={isActive}>Register</NavLink></li>
        </>
    );

    const userLinks = (
        <>
            <li><NavLink to="/create" className={isActive}>Create </NavLink></li>
            <li><NavLink to="/profile" className={isActive}> My Films </NavLink></li>
            <li><NavLink to="logout">Logout</NavLink></li>
        </>
    );

    return (

        <nav>
            <NavLink to="/catalog" className={isActive}> Theater</NavLink>
            <ul>
                <li><NavLink to="/" className={isActive} >Home </NavLink></li>
                <li><NavLink to="/catalog" className={isActive}>Catalog </NavLink></li>
                {isAuthenticated 
                    ? userLinks
                    : guestLinks
                }

            </ul>
        </nav>

    );
}

export default Header;