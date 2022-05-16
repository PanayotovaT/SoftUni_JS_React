import { Link } from 'react-router-dom';

const Search = () => {

    return (
        <>
                 <form className="search" action="" method="">
                <input type="search" name="" placeholder="Search here..." />
                <button type="submit">Search</button>
            </form>
            <section id="find-section">


                <div className="card">
                    <h3>Real House Luxury Villa</h3>
                    <p>Spacious and grand villa, 3 bedroom, 2 bath </p>
                    <div className="cta-container"><Link to="/details/123" className="det-link">Details</Link></div>
                    <div className="card_circle"><img src="/images/house2.jpg" alt="card-circle" /></div>

                </div>

                <div className="no-data-listing">
                    <p className="no-offer">No match was found for the submitted type...</p>
                </div>
            </section>
        </>
    )
}

export default Search;