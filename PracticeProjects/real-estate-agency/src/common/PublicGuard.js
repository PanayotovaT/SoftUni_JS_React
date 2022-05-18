import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PublicGuard = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}

export default PublicGuard;