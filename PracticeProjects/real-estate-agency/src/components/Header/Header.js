import { NavLink } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    let { user } = useAuthContext();

    const userLinks = (
        <>
            <li><NavLink to="/create">Create offer</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
        </>
    );

    const guestLinks = (
        <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </>
    );

    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <ul>
                    <li><NavLink to="/dashboard">Housing for rent</NavLink></li>
                    {user._id 
                        ? userLinks
                        : guestLinks
                    }

                </ul>
            </nav>
        </>
    )
}

export default Header;