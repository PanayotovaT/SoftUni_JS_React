import { NavLink } from 'react-router-dom';
const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <img className="logo" src="/images/before.png" alt="before-logo" />
                <img className="car logo" src="/images/trip-logo.png" alt="trip-logo" />
                <img className="logo" src="/images/after.png" alt="after-logo" />
                <div className="collapse navbar-collapse" id="navbarResponsive">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shared-trips">Shared Trips</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/create">Offer Trip</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Logout as [ test@abv.bg ]</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header;