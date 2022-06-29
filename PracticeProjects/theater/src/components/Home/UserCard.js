const UserCard = () => {

    return (
        <div>
            <div className="home-image">
                <img src={"https://media.timeout.com/images/103727773/380/285/image.jpg"}
                    alt="Card cap" />
            </div>
            <div className="info">
                <h4>Cloud 9 by Caryl Churchill</h4>
                <div className="info-buttons">
                    <Link className="btn details" to="/details">Details</Link>
                    <span className="likes">6 likes</span>
                </div>
            </div>
        </div>
    );
}

export default UserCard;