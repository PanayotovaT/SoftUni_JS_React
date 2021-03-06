import { useEffect, useState } from 'react';

import * as petService from '../../services/petService';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://softuni-custom-server-test.herokuapp.com/jsonstore/types')
            .then(res => res.json())
            .then(result => {
                const typesResult = Object.values(result);

                const ctaegoryResult = typesResult.reduce((a, x) => {

                    if (!a[x.category]) {
                        a[x.category] = []
                    }
                    a[x.category].push(x);

                    return a;
                }, {});
                setTypes(typesResult);
                setCategories(ctaegoryResult);

            })
    }, []);

    const onPetCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name').trim();
        let type = formData.get('type').toLocaleLowerCase();
        let imageUrl = formData.get('imageUrl').trim();
        let description = formData.get('description').trim();

        petService.create({ name, type, imageUrl, description })
            .then(result => {
                navigate('/home')
            });
    }

    const onCategoryChange = (e) => {
        setTypes(categories[e.target.value]);
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
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select id="category" name="category" onChange={onCategoryChange}>
                                {Object.keys(categories).map(x => <option key={x} value={x} >{x}</option>)}
                            </select>
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                {types.map(x => <option key={x._id} value={x.name}>{x.name}</option>)}
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