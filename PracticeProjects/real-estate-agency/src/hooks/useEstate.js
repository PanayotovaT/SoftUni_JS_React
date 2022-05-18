import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import * as estateService from '../services/estateService';

const useEstate = () => {
    const [estate, setEstate] = useState({});
    const { estateId } = useParams()

    useEffect(() => {
        estateService.getOne(estateId)
            .then(res => {
                setEstate(res);
            })
    }, [])

    return [estate, setEstate];
}

export default useEstate;