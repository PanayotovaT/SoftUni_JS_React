import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser('user',initialAuthState);
    }
    return (
        <AuthContext.Provider value={{user, login, logout, isLogged: Boolean(user.email)}}>
            {children}
        </AuthContext.Provider>
    )
}




