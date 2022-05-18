import { useNavigate } from 'react-router-dom';

import * as estateService from '../../services/estateService';

const Create = () => {
    const navigate = useNavigate();

    const craeteHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const {name, city, description, availablePieces, imageUrl, type, year} = Object.fromEntries(formData);
        const data = {name, city, description, availablePieces, imageUrl, type, year}
        
        estateService.create(data)
            .then(res => {
                navigate(`/details/${res._id}`);
            })
            .catch(err => {
                console.error(err.message)
                return;
            })

    }
    return (
        <section id="create-page">
        <div className="create-container">
            <div className="box-image"></div>

            <h2 className="box-heading"> Add new home</h2>


            <form className="form" method="POST" onSubmit={craeteHandler}>
                <div className="input">
                    <input type="text" className="input-field" id="home-name" placeholder="Real House Luxury Villa..." name="name" />
                    <label className="home-name">Name:</label>
                </div>
                <div className="input">
                    <input type="text" className="input-field" id="type" placeholder="Villa..." name="type" />
                    <label className="type">Property Type:</label>
                </div>
                <div className="input">
                    <input type="number" className="input-field" id="year" placeholder="2018..." name="year" />
                    <label className="year">Year Built:</label>
                </div>
                <div className="input">
                    <input type="text" className="input-field" id="city" placeholder="Sofia..." name="city" />
                    <label className="city">City</label>
                </div>

                <div className="input">
                    <input type="text" className="input-field" id="homeImage" placeholder="Image..." name="imageUrl" />
                    <label className="homeImage">Home Image:</label>
                </div>

                <div className="input">
                    <input type="text" className="input-field" id="description" placeholder="Description..." name="description" />
                    <label className="description">Property Description:</label>
                </div>

                <div className="input">
                    <input type="number" className="input-field" id="availablePieces" placeholder="1" name="availablePieces" />
                    <label className="availablePieces">Available pieces:</label>
                </div>

                <div className="create-action">
                    <button className="create-button">Add</button>
                </div>


            </form>
        </div>
    </section>
    );
}

export default Create;