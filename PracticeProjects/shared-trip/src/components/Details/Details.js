

const Details = () => {

    return (
        <section className="py-5 details" id="trip-details-page">
        <div className="container">
            <div className="destination">
                <div>
                    <span className="icon"><i className="fas fa-map-marked-alt"></i></span>
                    <h5> from <span>Plovdiv</span> to <span>Burgas</span> </h5>
                </div>
                <div>
                    <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                    <h5> <span>2021-07-07</span> at <span>10:40</span> </h5>
                </div>
            </div>
            <p className="line"></p>
            <div className="buddies-info">
                <i className="fas fa-users buddies"></i>
                <h5>Shared trip Buddies</h5>
                <div>
                    <p>peter@abv.bg, marry@abv.bg</p>

                    <p>there are no buddies yet...</p>
                </div>
                <h5>Driver: <span>mihail_valkov@mail.bg</span> </h5>
            </div>
            <p className="line"></p>
            <h5 className="brand">Car Brand: <span className="lead">Mercedes</span></h5>
            <div className="trip-info">
                <div>
                    <img className="img-fluid rounded"
                        src="https://www.nastarta.com/wp-content/uploads/2018/04/Mercedes-Benz-A-Class-2019-1280-3d.jpg"
                        alt="car-image" />
                </div>
                <div className="trip-desc">
                    <h5>Information about the trip</h5>
                    <textarea className="lead"
                        disabled>Wishing you a safe journey and a relaxing vacation when you arrive!</textarea>
                    <h5>Price: <span className="lead">40</span> BGN</h5>

                    <div className="actions">
                        <a href="" className="btn btn-danger">Delete this trip</a>
                        <a href="" className="btn btn-warning">Edit this trip</a>

                        <a href="" className="btn btn-join">Join now, [ 1 ] seats left!</a>

                        <span className="btn btn-info">Already joined. Don't be late!</span>

                        <span className="btn btn-secondary">No seats available! [0]</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
}

export default Details;