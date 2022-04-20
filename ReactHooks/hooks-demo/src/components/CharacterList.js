import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const CharacterList = () => {
    // const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //     fetch('https://swapi.dev/api/people')
    //         .then(res => res.json())
    //             .then(result =>{ 
    //                 setCharacters(result.results);
    //             });
    // }, []);
    const characters = useFetch('https://swapi.dev/api/people');

    return (
        <ul>
            {characters.map(x =><li key={x.name}>{x.name}</li>)}
        </ul>
    );
}
export default CharacterList;