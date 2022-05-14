import { Link, useParams, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import usePost from '../../hooks/usePost';
import * as postService from '../../services/postService';

const Details = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = usePost(postId);
    const { user } = useAuthContext();

    const deleteHandler = (e) => {
        e.preventDefault();

        postService.deleteItem(postId) 
            .then(res => {

                navigate('/dashboard');
            })
            .catch(err => {
                console.error(err.message);
                return;
            })

    }

    const ownerLinks = (
        <>
            <Link to={`/edit/${postId}`} className="edit-btn">Edit</Link>
            <Link to={`/delete/${postId}`} className="del-btn" onClick={deleteHandler}>Delete</Link>
        </>
    );

    const userLinks = (
        <>
            <Link to={`/like/${postId}`} className="vote-up">UpVote +1</Link>
            <Link to={`/dislike/${postId}`} className="vote-down">DownVote -1</Link>
            <p className="thanks-for-vote">Thanks For Voting</p>
        </>
    )
    return (
        <>
            <section id="details-page">

                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">

                            <h1>Title: {post.title}</h1>
                            <h3>Created by an author: {post.name}</h3>
                            <div className="card_animal">
                                <p className="card-keyword">Keyword: {post.keyword}</p>
                                <p className="card-location">Location: {post.location}</p>
                                <p className="card-date">Date: {post.date}</p>
                            </div>

                            <p className="disc">Description: {post.description}</p>

                            <div className="social-btn">
                            {user._id == post._ownerId
                                ? ownerLinks
                                : userLinks
                            }


                            </div>
                        </div>
                    </div>
                    <div className="card_right">
                        <img src={post.imageUrl} alt="animal" />
                    </div>
                </div>

            </section>

            <section id="votes">
                <div className="vote-info">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>Votes</h1>
                            <div className="card_vote">
                                <p className="PV">Total rating of votes: 0</p>
                            </div>

                            <p className="disc">People who voted for the post - No one has voted yet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details;