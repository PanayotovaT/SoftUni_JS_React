import { useState, useEffect } from 'react' ;

import * as tripService from '../services/tripService';

const useTrip = (id) => {
    const [ trip, setTrip ] = useState({});

    useEffect(() => {
        tripService.getOne(id)
            .then(data => {
                setTrip(data);
            }) 
    }, [id])

    return [
        trip,
        setTrip
    ]
}

export default useTrip;
