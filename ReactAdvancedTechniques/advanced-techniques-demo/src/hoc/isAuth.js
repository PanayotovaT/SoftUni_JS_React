import { useNavigate, Navigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const navigate = useNavigate();
        const { isAuthenticated, user } = useAuth();
        
        // if(!isAuthenticated) {
        //     navigate('/login');
        //     return null;
        // }

        return isAuthenticated
             ? <Component {...props} user={user}/>
             : <Navigate to="/login" />
        
    }

    return WrapperComponent;
}
