import { NavLink } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    const userLinks = (
        <>
            <li><NavLink to="/create">Create Post</NavLink></li>
            <li><NavLink to="/profile">Posts of {user.email}</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>

        </>
    );

    const guestLinks = (
        <>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </>
    )

    return (
        <nav>
            <img src="/img/logo.png" alt="logo" />

            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dashboard">All Posts</NavLink></li>
                {user.email 
                    ? userLinks
                    : guestLinks
                }
            </ul>

        </nav>
    );
}

export default Header;