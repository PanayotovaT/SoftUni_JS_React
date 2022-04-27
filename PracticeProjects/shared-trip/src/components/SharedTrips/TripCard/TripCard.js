import { Link } from 'react-router-dom';
const TripCard = ({
    trip
}) => {

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top"
                    src={trip.imageUrl}
                    alt="" />
                <div className="card-body">
                    <h5 className="card-title"><i className="fas fa-route"></i> <span>{trip.startPoint}</span> -
                        <span>{trip.endPoint}</span></h5>
                    <h5 className="mt-4 card-info"><i className="far fa-calendar-alt"></i> Date: <span>{trip.date}</span>
                    </h5>
                    <h5 className="mt-4 card-info"><i className="far fa-clock"></i> Time: <span>{trip.time}</span></h5>
                    <h5 className="mt-4"><i className="fas fa-hand-holding-usd"></i> Price: <span>{trip.price}</span> BGN</h5>
                </div>
                <div className="card-footer">
                    <Link to={`/details/${trip._id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default TripCard;