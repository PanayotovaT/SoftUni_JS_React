import { NavLink } from "react-router-dom";


const Header = () => {

    return (
   
            <nav>
                <NavLink to="/catalog">Theater</NavLink>
                <ul>
                    <li><NavLink to="/">Home </NavLink></li>
                    <li><NavLink to="/create">Create </NavLink></li>
                    <li><NavLink to="/catalog">Catalog </NavLink></li>
                    <li><NavLink to="logout">Logout</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>
            </nav>

    );
}

export default Header;