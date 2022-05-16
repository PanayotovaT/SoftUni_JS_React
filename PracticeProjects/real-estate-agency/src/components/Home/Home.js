import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <section id="home-page" className="background-image">
                <div className="home-container">

                    <div className="info">
                        <h1>Discover Your Perfect Home</h1>
                        <h2>The Best Real Estate Deals</h2>
                    </div>

                </div>
            </section>

            <section id="top-houses">
                <h1>Top Houses</h1>
                <div className="houses">


                    <div className="card-home">
                        <h2>Sunhouse C21</h2>
                        <div className="cta-container"><Link to="/details/123" className="details-link">Details</Link></div>
                        <div className="card_image"><img src="/images/apartments.jpg" alt="test" /></div>

                    </div>

                    <p className="no-data">There are no housing offers found...</p>
                </div>
            </section >
        </>
    )
}

export default Home;