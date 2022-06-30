import { Link } from "react-router-dom";

const Details = () => {

    return (
        <div className="container">

            <section className="details">
                <h1>Theater title: Who's Afraid of Virginia Woolf? by Edward Albee</h1>
                <div>
                    <img src={"https://media.timeout.com/images/103727744/380/285/image.jpg"} alt="random" />
                </div>
            </section>

            <section className="details">
                <h3>Theater Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, et ex. Dignissimos
                    voluptatum recusandae quos. Eum beatae soluta velit voluptas hic incidunt ab dolorem ipsam
                    blanditiis laudantium. Distinctio, aliquam libero.</p>
                <div className="buttons">
                    <Link className="btn delete" to="/delete/id">Delete</Link>
                    <Link className="btn edit" to="/edit/id">Edit</Link>
                    <span className="liked">You have already liked this play!</span>
                    <Link className="btn like" to="/like/id">Like</Link>
                </div>
            </section>
        </div>
    );
}

export default Details;