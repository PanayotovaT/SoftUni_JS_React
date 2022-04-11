import { Link } from 'react-router-dom';

const Header = ({
    navigationChangeHandler
}) => {
    const onHeaderClick = (e) => {
        e.preventDefault();

        if(e.target.tagName == 'A') {
            // console.log(e.target.href);
            let url = new URL(e.target.href);
            // console.log(url);
            navigationChangeHandler(url.pathname);
        }
    };

    return (
        <header onClick={onHeaderClick}>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                <div id="user">
                    <Link to="/create">Create Game</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;