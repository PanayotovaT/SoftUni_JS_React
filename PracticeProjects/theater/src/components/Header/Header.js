import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const Header = () => {
    const { isAuthenticated } = useAuthContext();

    const guestLinks = (
        <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </>
    );

    const userLinks = (
        <>
            <li><NavLink to="/create">Create </NavLink></li>
            <li><NavLink to="/profile">My Films </NavLink></li>
            <li><NavLink to="logout">Logout</NavLink></li>
        </>
    );

    return (

        <nav>
            <NavLink to="/catalog">Theater</NavLink>
            <ul>
                <li><NavLink to="/">Home </NavLink></li>
                <li><NavLink to="/catalog">Catalog </NavLink></li>
                {isAuthenticated 
                    ? userLinks
                    : guestLinks
                }

            </ul>
        </nav>

    );
}

export default Header;