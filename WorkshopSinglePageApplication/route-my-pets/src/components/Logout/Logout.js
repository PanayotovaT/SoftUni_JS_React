import { Navigate } from 'react-router-dom';
import * as authService from '../../services/authService';


const Logout = ({
    onLogout
}) => {
    onLogout();
    
    return(
        <Navigate to="/login" />
    )
};

export default Logout;