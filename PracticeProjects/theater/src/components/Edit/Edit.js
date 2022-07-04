import { useNavigate, useParams } from 'react-router-dom';

import useFilm from '../../hooks/useFilm';
import { updateFilm } from '../../services/filmService';

const Edit = () => {
    const navigate = useNavigate();
    const [film, setFilm] = useFilm();
    const { id } = useParams();


    const editHandler = (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const check = Boolean(formData.get('check'));
        const data = {
            title,
            description,
            imageUrl,
            check,
            likes: film.likes
        }

        if (title == ''|| description == '' || imageUrl == '') {
            throw new Error('Missing field');
        }

        updateFilm(id, data)
            .then(res => {
                navigate(`/details/${id}`);
            })
            .catch(err => {
                console.error(err);
                setFilm({title, description, imageUrl, check});
            })

    }
    return (
        <form className="theater-form" method="POST" onSubmit={editHandler}>
            <h1>Edit Theater</h1>
            <div>
                <label htmlFor="title">Theater Title:</label>
                <input type="text" placeholder="Theater name" name="title" defaultValue={film.title} />
            </div>
            <div>
                <label htmlFor="description">Theater Description:</label>
                <textarea placeholder="Description" name="description" defaultValue={film.description} />
            </div>
            <div>
                <label htmlFor="imageUrl">Image url:</label>
                <input type="text" placeholder="Image Url" name="imageUrl" defaultValue={film.imageUrl}/>
            </div>
            <div className="check">
                <input type="checkbox" id="check-box" name="check" defaultChecked={film.check} />
                    <label htmlFor="check-box">Public</label>
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

export default Edit;