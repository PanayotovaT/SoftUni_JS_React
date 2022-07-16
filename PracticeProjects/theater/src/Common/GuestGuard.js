import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const GuestGuard = ({children}) => {
    const {isAuthenticated} = useAuthContext();

    return isAuthenticated ? <Navigate to="/" /> : children;
}

export default GuestGuard;