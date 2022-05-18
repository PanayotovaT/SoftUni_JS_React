import { Link, useParams } from 'react-router-dom';

import useEstate from '../../hooks/useEstate';

const Details = () => {
    const { estateId } = useParams()
    const [estate ] = useEstate(estateId);

    return (
        <section id="deatils-page">
        <div className="wrapper">
            <div className="product-img">
                <img src={estate.imageUrl} alt="appartments" />
            </div>
            <div className="product-info">
                <div className="product-text">
                    <div className="product-text">
                        <h1>Name: {estate.name}</h1>
                        <h2>Type: {estate.type}</h2>
                        <h4>Year: {estate.year}</h4>
                        <h4>City: {estate.city}</h4>
                        <p>Description: {estate.description}</p>

                        <p>People rented this housing: Alex Petkov, Ivan Dobrev</p>

                        <p>People rented this housing: There are no tenants yet.</p>
                    </div>
                </div>

                <div className="product-btn">
                    <Link to="/edit/123" className="edit">Edit</Link>
                    <Link to="/delete/123" className="remove">Delete</Link>
                    
                    <Link to="/rent/123" className="rentHome">Rent a home, available 2 housing</Link>
                    <p className="alRentHome">You have already rent this home</p>

                    <p className="no-housing">No Housing Available!</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Details;