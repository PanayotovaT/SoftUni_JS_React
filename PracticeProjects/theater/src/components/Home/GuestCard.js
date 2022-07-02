const GuestCard = ({card}) => {
    return (

        <div>
            <div className="home-image">
                <img src={card.imageUrl}
                    alt="Card cap" width="400" />
            </div>
            <div className="info">
                <h4>{card.title}</h4>
            </div>
        </div>

    );
}

export default GuestCard;