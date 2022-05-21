import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header">
            <ul className="header-list">
                <li className="header-list-item"><Link to="/" className="header-list-item-link">Home</Link></li>
                <li className="header-list-item"><Link to="/dashboard" className="header-list-item-link">Dashboard</Link></li>
                <li className="header-list-item"><Link to="/categories" className="header-list-item-link">Categories</Link></li>
                <li className="header-list-item"><Link to="/my-books" className="header-list-item-link">My books</Link></li>
                <li className="header-list-item"><Link to="/login" className="header-list-item-link">Login</Link></li>
                <li className="header-list-item"><Link to="/register" className="header-list-item-link">Register</Link></li>
                <li className="header-list-item"><Link to="/logout" className="header-list-item-link">Logout</Link></li>
            </ul>

        </header>
    )
}

export default Header;