import { useState, useEffect } from 'react';

import * as estateService from '../services/estateService';

const useEstates = () => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {

        estateService.getAll()
            .then(res => {
                setEstates(res);
            })
            .catch(err => {
                console.error(err.message)
                return;
            })
    }, []);

    return [estates, setEstates]

}

export default useEstates;