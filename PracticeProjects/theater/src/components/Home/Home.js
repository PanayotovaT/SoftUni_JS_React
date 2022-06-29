import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <section className="container">
                <h1>My Theater Info</h1>
                <p>Lorem reprehenderit nostrud do do ut ad irure aliquip anim adipisicing nulla ullamco. Non mollit
                    Lorem sunt proident nostrud dolore est minim reprehenderit adipisicing consectetur dolore.
                    Nostrud id amet ad irure irure aute ad veniam deserunt mollit sint pariatur. Velit quis amet
                    aliquip tempor. Dolore culpa deserunt proident nostrud amet consectetur.
                    Exercitation exercitation pariatur deserunt duis. Elit duis aute do ullamco fugiat magna officia
                    ad. Pariatur nulla ut pariatur Lorem pariatur incididunt eu excepteur sint qui. Amet esse et
                    eiusmod officia fugiat aliquip ullamco laboris sint cillum cillum. Elit proident mollit officia
                    tempor aliquip non ea occaecat sunt eiusmod enim nulla anim. Voluptate laborum consequat elit
                    quis cupidatat tempor ad laboris duis non eiusmod.</p>
            </section>
            <section>
                <div className="aux">
                    <h1>Available Plays</h1>
                    <div className="home-buttons">
                        <Link className="btn create-play" to="/create">Create Theater</Link>
                        <Link className="btn create-play" to="/sort-by-date">Sort by Date</Link>
                        <Link className="btn create-play" to="/sort-by-likes">Sort by Likes</Link>
                    </div>
                </div>
                <div className="theaters-container">
                    <div>
                        <div className="home-image">
                            <img src={"https://media.timeout.com/images/103727744/380/285/image.jpg"}
                                alt="Card  cap" / >
                        </div>
                        <div className="info">
                            <h4>Who's Afraid of Virginia Woolf? by Edward Albee</h4>
                            <div className="info-buttons">
                                <Link className="btn details" to="/details">Details</Link>
                                <span className="likes">5 likes</span>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="home-image">
                            <img src={"https://media.timeout.com/images/103727745/380/285/image.jpg"}
                                alt="Card  cap" />
                        </div>
                        <div className="info">
                            <h4>Death of a Salesman by Arthur Miller</h4>
                            <div className="info-buttons">
                                <Link className="btn details" to="/details">Details</Link>
                                <span className="likes">4 likes</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="home-image">
                            <img src={"https://media.timeout.com/images/103727757/380/285/image.jpg"}
                                alt="Card cap" />
                        </div>
                        <div className="info">
                            <h4>This Is Our Youth by Kenneth Lonergan</h4>
                            <div className="info-buttons">
                                <Link className="btn details" to="/details">Details</Link>
                                <span className="likes">3 likes</span>
                            </div>
                        </div>
                    </div>
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

                </div>
            </section>
        </>
    );
}

export default Home;