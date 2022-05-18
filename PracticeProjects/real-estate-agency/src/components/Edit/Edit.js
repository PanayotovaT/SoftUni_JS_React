import { useParams, useNavigate } from 'react-router-dom';

import useEstate from '../../hooks/useEstate';
import * as estateService from '../../services/estateService';

const Edit = () => {
    const navigate = useNavigate();
    const { estateId } = useParams();
    const [estate] = useEstate(estateId);


    const updateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, type, city, year, imageUrl, description, availablePieces } = Object.fromEntries(formData);
        const data = { name, type, city, year, imageUrl, description, availablePieces }

        estateService.update(estateId, data)
            .then(res => {
                navigate(`/details/${estateId}`);
            })
            .catch(err => {
                console.error(err.message);
                return;
            })

    }
    return (
        <section id="edit-page">
            <div className="edit-container">
                <div className="box-image">

                </div>
                <h2 className="box-heading">
                    Edit Home
                </h2>

                <form className="form" method="POST" onSubmit={updateHandler}>
                    <div className="input">
                        <input type="text" className="input-field" id="home-name" name="name" defaultValue={estate.name}/>
                        <label className="home-name">Name:</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" id="type" name="type" defaultValue={estate.type} />
                        <label className="type">Property Type:</label>
                    </div>
                    <div className="input">
                        <input type="number" className="input-field" id="year" name="year" defaultValue={estate.year} />
                        <label className="year">Year Built:</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" id="city" name="city" defaultValue={estate.city} />
                        <label className="city">City</label>
                    </div>

                    <div className="input">
                        <input type="text" className="input-field" id="homeImage" name="imageUrl" defaultValue={estate.imageUrl} />
                        <label className="homeImage">Home Image:</label>
                    </div>

                    <div className="input">
                        <input type="text" className="input-field" id="description" name="description" defaultValue={estate.description} />
                        <label className="description">Property Description:</label>
                    </div>

                    <div className="input">
                        <input type="number" className="input-field" id="availablePieces" name="availablePieces" defaultValue={estate.availablePieces} />
                        <label className="availablePieces">Available pieces:</label>
                    </div>

                    <div className="create-action">
                        <button className="create-button">Edit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Edit;