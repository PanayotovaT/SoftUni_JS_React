import { useNavigate } from 'react-router-dom';
import {useEffect } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuthContext();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then((res) => {
                console.log(res)
                logout();
                  navigate('/login')
            })
    }, [logout, navigate, user.accessToken])
    return null;
};

export default Logout;