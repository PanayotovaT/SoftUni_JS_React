import { useNavigate } from 'react-router-dom';
import {useEffect } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuthContext();

    useEffect(() => {
        console.log(user.accessToken);
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                  navigate('/login')
            })
    }, [logout, user.accessToken, navigate])
    return null;
};

export default Logout;