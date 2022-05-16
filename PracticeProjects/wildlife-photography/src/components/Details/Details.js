import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import usePost from '../../hooks/usePost';
import * as postService from '../../services/postService';
import * as votesService from '../../services/votesServce';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Details = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post] = usePost(postId);
    const { user } = useAuthContext();
    const [likes, setLikes] = useState([]);
    const [dislikes, setDislikes] = useState([]);
    const [hasVoted, setHasVoted] = useState(false);
    const { showNotification } = useNotificationContext();

    const voter = { postId, userId: user._id, email: user.email };
    useEffect(() => {
        votesService.getAllLikes(postId)
            .then(likes => {
                if (likes.some(x => x.userId == user._id)) {
                    setHasVoted(true);
                }
                setLikes(likes)
            })
            .catch(err => {
                setLikes([]);
            })
    }, [postId, user._id]);

    useEffect(() => {
        votesService.getAllDislikes(postId)
            .then(dislikes => {

                setDislikes(dislikes);
                if (dislikes.some(x => x.userId == user._id)) {
                    setHasVoted(true);
                }
            })
            .catch(err => {
                setDislikes([]);
            })
    }, [postId, user._id]);

    const deleteHandler = (e) => {
        e.preventDefault();

        postService.deleteItem(postId)
            .then(res => {

                navigate('/dashboard');
            })
            .catch(err => {
                console.error(err.message);
                return err;
            })

    }

    const upVoteHandler = async (e) => {
        e.preventDefault();
        await votesService.addLike(voter);
        setLikes(s => ([...s, voter]));
        setHasVoted(true);
        showNotification('You have successfully liked this post', types.success);

    }

    const downVoteHandler = async (e) => {
        e.preventDefault();
        await votesService.dislike(voter);
        setDislikes(s => ([...s, voter]));
        setHasVoted(true);
        showNotification('You have successfully disliked this post', types.success);

    }
    const ownerLinks = (
        <>
            <Link to={`/edit/${postId}`} className="edit-btn">Edit</Link>
            <Link to={`/delete/${postId}`} className="del-btn" onClick={deleteHandler}>Delete</Link>
        </>
    );

    const userLinks = (
        <>
            {hasVoted
                ? <p className="thanks-for-vote">Thanks For Voting</p>
                : (
                    <>
                        <Link to={`/like/${postId}`} className="vote-up" onClick={upVoteHandler}>UpVote +1</Link>
                        <Link to={`/dislike/${postId}`} className="vote-down" onClick={downVoteHandler} >DownVote -1</Link>
                    </>
                )
            }






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
                                <p className="PV">Total rating of votes: {likes.length - dislikes.length}</p>
                            </div>

                            <p className="disc">{likes.length > 0 ? ` People who voted for the post - ${likes.slice(-3).map(x => x.email).join(', ')}` : 'No one has voted yet'}.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details;