import { useEffect, useState } from 'react';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import * as petService from '../../services/petService';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const onPetCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name').trim();
        let type = formData.get('type').toLocaleLowerCase();
        let imageUrl = formData.get('imageUrl').trim();
        let description = formData.get('description').trim();

        petService.create({ name, type, imageUrl, description }, user.accessToken)
            .then(result => {
                navigate('/home')
            });
    }


    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onPetCreate} method="POST">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="horse">Horse</option>
                                <option value="parrot">Parrot</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;