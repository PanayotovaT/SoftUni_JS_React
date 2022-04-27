const TripInfo = ({
    trip
}) => {
    return (
        <p>from <span>{trip.startPoint}</span> to <span>{trip.endPoint}</span> on <span>{trip.date}</span> at
        <span>{trip.time}</span></p>
    );
}

export default TripInfo;