import { NavLink } from "react-router-dom";
const Header = () => {

    return (
        <nav>
            <img src="./img/logo.png" alt="logo" />

            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dashboard">All Posts</NavLink></li>
                <li><NavLink to="/create">Create Post</NavLink></li>
                <li><NavLink to="/profile">Posts of [email]</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>

        </nav>
    );
}

export default Header;