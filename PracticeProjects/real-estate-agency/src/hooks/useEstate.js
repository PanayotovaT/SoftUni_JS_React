import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as estateService from '../services/estateService';

const useEstate = () => {
    const [estate, setEstate] = useState({});
    const navigate = useNavigate()

    const { estateId } = useParams();

    useEffect(() => {
        estateService.getOne(estateId)
            .then(res => {
                setEstate(res);
            })
            .catch(err => {
                return navigate('/not-found');
            })
    }, [estateId, navigate]);
  
    return [estate, setEstate];
}

export default useEstate;