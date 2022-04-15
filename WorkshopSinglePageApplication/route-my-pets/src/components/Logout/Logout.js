import { Navigate, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';


const Logout = ({
    onLogout
}) => {
    const navigate = useNavigate();
    authService.logout();
    onLogout();
    return (
        navigate('/login')
    );

};

export default Logout;