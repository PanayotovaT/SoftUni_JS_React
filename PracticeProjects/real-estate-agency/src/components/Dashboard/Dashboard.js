import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
        <section id="all-listings">
        <h1>Apartments for recents</h1>


        <div className="card">
            <h3>Sunhouse C21</h3>
            <p>Spacious dining room, remodel kitchen and wonderful deeded walk-out deck. </p>
            <div className="cta-container"><Link to="/details/123" className="det-link">Details</Link></div>
            <div className="card_circle"><img src="/images/apartments.jpg" alt="card-circle" /></div>

        </div>

        <div className="no-data-listing">
            <p className="no-offer">There are no housing offers found...</p>
        </div>

    </section>
    );
}

export default Dashboard;