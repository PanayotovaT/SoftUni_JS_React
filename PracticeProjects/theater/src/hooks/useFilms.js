import { useState, useEffect } from 'react';
import {getAll} from '../services/filmService';

const useFilms = () => {
    const [films, setFilms] = useState({})

    useEffect(() => {
            getAll()
                .then(data => {
                    
                    setFilms(data)
                });
    }, [getAll]);
    return [
        films,
        setFilms
    ]
};

export default useFilms;
