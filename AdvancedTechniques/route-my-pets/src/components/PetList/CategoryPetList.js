import { useEffect, useState } from 'react';
import PetCard from './PetCard/PetCard';
import * as petService from '../../services/petService';


const CategoryPetList = ({
    type
}) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            }).catch(err => {
                console.log('err');
                console.error(err.message);
                return;
            })
    }, []);
    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.filter(x => x.type === type).map(x => <PetCard key={x._id} pet={x} />)}
                    </ul>)
                : <p className="no-pets">No pets in database!</p>
            }
        </>
    );
}

export default CategoryPetList;