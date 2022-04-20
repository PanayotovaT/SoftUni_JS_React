import { useState } from 'react';
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

    const [url, setUrl] = useState('https://swapi.dev/api/people');
    const [btnText, setBtnText] = useState('Load Planets');
    const [title, setTitle] = useState('Characters');
    const { state: characters, loading } = useFetch(url);
   
    const urlChangeHandler =() => {
        if(url == 'https://swapi.dev/api/people') {
            setBtnText('Load Characters');
            setTitle('Planets')
            setUrl('https://swapi.dev/api/planets');
        } else {
            setBtnText('Load Planets');
            setTitle('Characters');
            setUrl('https://swapi.dev/api/people');
        }
    }
    return (
        <>  
            <h2>{title}</h2>
            <ul>
                {loading
                    ? <p>Loading...</p>
                    : characters.map(x => <li key={x.name}>{x.name}</li>)}
            </ul>
            <button onClick={urlChangeHandler}>{btnText}</button>
        </>
    );
}
export default CharacterList;