import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Logout  = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();

    useEffect(() => {
        authService.logout()
            .then(data => {
                logout();
                navigate('/login');
            })
            .catch(err => {
                logout();
                return;
            })

    }, [navigate, logout]);

    return null;
}

export default Logout;