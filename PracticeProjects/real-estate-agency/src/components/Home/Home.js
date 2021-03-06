import CardHome from './CardHome';
import useEstates from '../../hooks/useEstates';

const Home = () => {
    const [estates] = useEstates();

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
                    {estates.length > 0
                        ? estates.map(x => <CardHome key={x._id} card={x} />)
                        : <p className="no-data">There are no housing offers found...</p>
                    }
                </div>
            </section >
        </>
    )
}

export default Home;