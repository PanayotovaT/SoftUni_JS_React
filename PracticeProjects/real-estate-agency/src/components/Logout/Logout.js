import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext } from '../../contexts/NotificationContext';

const Logout = () => {
    const { logout } = useAuthContext();
    const navigate = useNavigate();
    const { showNotification } = useNotificationContext();

    useEffect(() => {

        authService.logout()
            .then(res => {
                showNotification('You have successfully logged out!');
                logout();
                navigate('/login')
            })
            .catch(err => {
                console.log(err.message);
                logout();
            })
    }, [logout, navigate, showNotification]);

    return null;
}

export default Logout;