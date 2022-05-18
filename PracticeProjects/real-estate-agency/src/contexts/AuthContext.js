import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();

export const initialUser = {
    _id: '',
    username: '',
    accessToken: ''
}

export const AuthContextProvider  = ({ children}) => {
    const [user, setUser] = useLocalStorage('user',initialUser);

    const login = (authData) => setUser(authData);

    const logout = () => setUser(initialUser);

    return <AuthContext.Provider value={{user, login, logout, isAuthenticated: Boolean(user.accessToken)}} >
        {children}
    </AuthContext.Provider>

}

export const useAuthContext = () => useContext(AuthContext);
