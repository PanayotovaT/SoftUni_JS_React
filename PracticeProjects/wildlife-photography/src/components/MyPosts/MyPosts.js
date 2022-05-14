import { useEffect, useState } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import * as postService from '../../services/postService';
import MyCard from './MyCard/MyCard';

const MyPosts = () => {
    const { user } = useAuthContext();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getMyPosts(user._id)
            .then(data => {
                setPosts(Object.values(data));
            })
            .catch(err => {
                console.error(err.message);
                return;
            })

    }, [user._id]);

    return (
        <section id="my-posts">
            <h1>Personal Posts</h1>

            <div className="my-container">
                {posts.length > 0
                    ? posts.map(x => <MyCard card={x} key={x._id} />)
                    : (
                        <>
                            <div className="no-posts-img">
                                <img src="/img/bear.jpg" alt="image_nature_3" />
                            </div>
                            <p className="no-offer">There are no own posts yet...</p>
                        </>
                    )
                }


            </div>

        </section>
    )
}

export default MyPosts;