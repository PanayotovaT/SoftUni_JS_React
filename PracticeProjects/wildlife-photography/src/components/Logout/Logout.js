import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Logout = () => {
    const navigate = useNavigate()
    const { logout } = useAuthContext();
    const { showNotification } = useNotificationContext();

    useEffect(() => {
        authService.logout()
            .then(response => {
                logout();
                showNotification('You have successfully logged out', types.info)
                navigate('/login');
            })
            .catch(err => {
                logout();
                return;
            });
    }, [ logout, navigate, showNotification ]);



    return null;
}

export default Logout