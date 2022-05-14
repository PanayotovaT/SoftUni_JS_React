import { useNavigate } from 'react-router-dom';

import * as postService from '../../services/postService';
import { useAuthContext } from '../../contexts/AuthContext';

const Create = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const name = `${user.firstName} ${user.lastName}`;

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const title = formData.get('title');
        const keyword = formData.get('keyword');
        const location = formData.get('location');
        const date = formData.get('date');
        const imageUrl = formData.get('imageUrl');
        const description = formData.get('description');

        if(title == '' || keyword == '' || location == '' || date=='' || imageUrl == '' || description == '') {
            throw new Error('All fields are required');
        }

        postService.create({ title, keyword, location, date, imageUrl, description, name })
            .then(res => {
                console.log(res)
                navigate('/dashboard');
            })
            .catch(err => {
                console.log(err.message);
                return;
            })
    }
    return (

        <section id="create-page">
            <div className="createSection">
                <div className="info">
                    <h2>Create your post, share information about wildlife.</h2>
                </div>

                <form method="POST" className="createForm" onSubmit={createHandler}>
                    <h2>Create Post</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="inputFields" id="title" placeholder="Two golden snub-nosed monkeys" name="title"  />
                        </li>
                        <li>
                            <label htmlFor="key-word">Keyword:</label>
                            <input type="text" className="inputFields" id="keyword" placeholder="Animal" name="keyword"  />
                        </li>
                        <li>
                            <label htmlFor="location">Location:</label>
                            <input type="text" className="inputFields" id="location" placeholder="North America" name="location" />
                        </li>
                        <li>
                            <label htmlFor="date">Date of creation:</label>
                            <input type="text" className="inputFields" id="date" placeholder="18.02.2021" name="date" />
                        </li>
                        <li>
                            <label htmlFor="image">Wildlife image:</label>
                            <input type="text" className="inputFields" id="image" placeholder="http:/..." name="imageUrl"  />
                        </li>
                        <li>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" className="inputFields" name="description" placeholder="Monkey is..." />
                        </li>
                        <li id="center-btn">
                            <button id="create-btn">Create</button>
                        </li>
                    </ul>
                </form>

            </div>
        </section>
    )
}

export default Create;