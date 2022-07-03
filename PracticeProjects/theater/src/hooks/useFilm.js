import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getOne } from '../services/filmService';

const useFilm = () => {
    const [film, setFilm] = useState({});
    const {id }= useParams();
    useEffect(() => {
        getOne(id)
            .then(res => {
                setFilm(res);
            }).catch(err => {
                return;
            })
    }, [id])

    return [
        film,
        setFilm
    ]
}

export default useFilm;