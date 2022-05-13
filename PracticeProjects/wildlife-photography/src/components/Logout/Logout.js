import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const navigate = useNavigate()
    const { logout } = useAuthContext();

    useEffect(() => {
        authService.logout()
            .then(response => {
                logout();
                navigate('/login');
            })
            .catch(err => {
                console.log(err.message);
                return;
            });
    }, [ logout, navigate ]);



    return null;
}

export default Logout