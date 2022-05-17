import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {

        authService.logout()
            .then(res => {
               
                logout();
                navigate('/login')
            })
            .catch(err => {
                console.error(err.message);
                logout();
            })
    }, [logout, navigate]);

    return null;
}

export default Logout;