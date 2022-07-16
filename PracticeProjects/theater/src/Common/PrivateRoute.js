import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {

    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? children : <Navigate to="/login"  />
}

export default PrivateRoute;