const MyCard = ({ card }) => {

    return (
        <div className="my-card">
            <div className="card-header">
                <img src={card.imageUrl} alt={card.title} />
            </div>
            <div className="card-body">
                <span className="tag tag-teal">Keyword: {card.keyword}</span>
                <h4>
                    Title: {card.title}
                </h4>
                <div className="user">
                    <img src="https://snworksceo.imgix.net/dtc/3f23c937-0065-4e17-8daa-46449777caed.sized-1000x1000.jpg?w=1000" alt="vote" />
                    <div className="user-info">
                        <h5>Author: {card.name}</h5>
                        <small>Rating of votes: -5</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCard;