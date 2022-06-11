import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <ul className="header-list">
                <li className="header-list-item"><NavLink to="/" className={({isActive})=> isActive ? 'active-header-link' : 'header-list-item-link'}>Home</NavLink></li>
                <li className="header-list-item"><NavLink to="/dashboard" className={({isActive})=> isActive ? 'active-header-link' : 'header-list-item-link'}>Dashboard</NavLink></li>
                <li className="header-list-item"><NavLink to="/categories" className={({isActive})=> isActive ? 'active-header-link' : 'header-list-item-link'}>Categories</NavLink></li>
                <li className="header-list-item"><NavLink to="/my-books" className={({isActive})=> isActive ? 'active-header-link' : 'header-list-item-link'}>My books</NavLink></li>
                <li className="header-list-item"><NavLink to="/login" className={({isActive})=> isActive ? 'active-header-link' : 'header-list-item-link'}>Login</NavLink></li>
                <li className="header-list-item"><NavLink to="/register" className={({isActive})=> isActive ? 'active-header-link' : 'header-list-item-link'}>Register</NavLink></li>
                <li className="header-list-item"><NavLink to="/logout" className={({isActive})=> isActive ? 'active-header-link' : 'header-list-item-link'}>Logout</NavLink></li>
            </ul>

        </header>
    )
}

export default Header;