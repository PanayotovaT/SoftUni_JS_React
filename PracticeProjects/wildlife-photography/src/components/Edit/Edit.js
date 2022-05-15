import { useNavigate, useParams } from 'react-router-dom';

import usePost from '../../hooks/usePost';
import * as postService from '../../services/postService';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Edit = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post] = usePost(postId);
    const { showNotification } = useNotificationContext()

    const updateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const title = formData.get('title');
        const keyword = formData.get('keyword');
        const location = formData.get('location');
        const date = formData.get('date');
        const imageUrl = formData.get('imageUrl');
        const description = formData.get('description');

        const updatedPost = { title, keyword, location, date, imageUrl, description};

        postService.update(postId, updatedPost)
            .then(data => {
                showNotification('You have successfully updated the post', types.success);
                navigate(`/details/${postId}`);
            })
            .catch(err => {
                console.error(err.message);
                showNotification(err.message, types.error);
                return;
            })

    }

    return (
        <section id="edit-page">
            <div className="editSection">
                <div className="info">
                    <h2>Edit your own post!</h2>
                </div>

                <form  method="PUT" className="editForm" onSubmit={updateHandler}>
                    <h2>Edit Post</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="inputFields" id="title" name="title" defaultValue={post.title} />
                        </li>
                        <li>
                            <label htmlFor="key-word">Keyword:</label>
                            <input type="text" className="inputFields" id="keyword" name="keyword" defaultValue={post.keyword} />
                        </li>
                        <li>
                            <label htmlFor="location">Location:</label>
                            <input type="text" className="inputFields" id="location" name="location" defaultValue={post.location} />
                        </li>
                        <li>
                            <label htmlFor="date">Date of creation:</label>
                            <input type="text" className="inputFields" id="date" name="date" defaultValue={post.date} />
                        </li>
                        <li>
                            <label htmlFor="image">Wildlife image:</label>
                            <input type="text" className="inputFields" id="image" name="imageUrl"  defaultValue={post.imageUrl}/>
                        </li>
                        <li>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" className="inputFields" name="description" defaultValue={post.description} />
                        </li>
                        <li id="center-btn">
                            <button id="edit-btn">Update</button>
                        </li>
                    </ul>
                </form>

            </div>
        </section>

    );
}

export default Edit;