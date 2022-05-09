import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';

const isAuth = (Component) => {

    const WrappedComponent = (props) => {
        const { isAuthenticated, user } = useAuthContext();

        return isAuthenticated
            ? <Component {...props} user={user} />
            : <Navigate to="/login" />
    }


    return WrappedComponent;
}

export default isAuth;