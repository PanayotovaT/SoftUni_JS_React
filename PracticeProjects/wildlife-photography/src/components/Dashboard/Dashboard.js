import { useEffect, useState } from 'react';

import Card from './Card/Card';
import * as postService from '../../services/postService';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(res => {
                setPosts(Object.values(res));
            })
            .catch(err => {
                console.error(err.message);
                return;
            })
    }, []);

    return (

        <section id="catalog">
            <h1>All posts</h1>
            <div className="band">
                {posts.length > 0

                    ? posts.map(x => <Card key={x._id} card={x} />)
                    : (
                        <>
                            <div className="no-posts-img">
                                <img src="/img/animal.jpg" alt="image_nature_3" />
                            </div>
                            <p className="no-offer">There are no posts yet...</p>
                        </>
                    )
                }


            </div>

        </section >
    )
}

export default Dashboard;