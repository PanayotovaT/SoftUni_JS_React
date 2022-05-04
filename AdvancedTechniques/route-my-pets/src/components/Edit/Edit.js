import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './Edit.css';
import { usePetState } from '../../hooks/usePetState';
import { useAuthContext } from '../../contexts/AuthContext';
import * as petService from '../../services/petService';

const types = [
    { value: 'cat', text: 'Cat' },
    { value: 'dog', text: 'Dog' },
    { value: 'horse', text: 'Horse' },
    { value: 'parrot', text: 'Parrot' },
    { value: 'other', text: 'Other' },
];

const Edit = () => {
    const navigate = useNavigate()
    const { petId } = useParams();
    const { user } =  useAuthContext();
    const [pet, setPet] = usePetState(petId);
    const [error, setError] = useState({ name: null });
    const [descrError, setDescrError] = useState({ name: null });

    const updatePetHandler = (e) => {
        e.preventDefault();
        console.log('Submit')
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        petService.update(petId, data, user.accessToken)
            .then(result => {
                navigate(`/details/${petId}`);
            });

    }

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            setError({ name: 'Name should be at least 3 characters.' })
        } else {
            setError({ name: null })
        }
    }

    const descriptionChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 10) {
            setDescrError({ name: 'Description should be at least 10 characters.' })
        } else {
            setDescrError({ name: null })
        }

    }

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={updatePetHandler} >
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className={'input' + (error.name ? ' input-name-error' : '')} >
                            <input type="text" name="name" id="name" defaultValue={pet.name} onBlur={nameChangeHandler} />
                        </span>
                        <span className={error.name ? 'name-error' : 'hidden'}>{error.name}</span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" defaultValue={pet.description} onBlur={descriptionChangeHandler} />
                        </span>
                        <Alert key='danger' variant='danger' show={Boolean(descrError.name)}>
                            {descrError.name}
                        </Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={pet.type} onChange={(e) => setPet(s => ({...s, type: e.target.value})) }>
                                {types.map(x => <option key={x.value} value={x.value} >{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>

    );
};

export default Edit;