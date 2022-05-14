import { Outlet, Navigate  } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';

const PublicRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return !isAuthenticated ? <Outlet /> : <Navigate to="/home" />
}

export default PublicRoute;