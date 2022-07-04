import { useNavigate } from 'react-router-dom';
import { createFilm } from '../../services/filmService';

const Create = () => {
    const navigate = useNavigate();

    const createHandler = (e)=> {
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
            likes: []
        }
        createFilm(data)
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => {
                return;
            })
    }

    return (
        <form className="theater-form"  method="POST" onSubmit={createHandler}>
            <h1>Create Theater</h1>
            <div>
                <label htmlFor="title">Theater Title:</label>
                <input type="text" placeholder="Theater name" name="title" />
            </div>
            <div>
                <label htmlFor="description">Theater Description:</label>
                <textarea placeholder="Description" name="description" />
            </div>
            <div>
                <label htmlFor="imageUrl">Image url:</label>
                <input type="text" placeholder="Image Url" name="imageUrl"/>
            </div>
            <div className="check">
                <input type="checkbox" id="check-box" name="check" />
                    <label htmlFor="check-box">Public</label>
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

export default Create;