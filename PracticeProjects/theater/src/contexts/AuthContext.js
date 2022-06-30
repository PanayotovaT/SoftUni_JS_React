import { createContext, useContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    username: '',
    accessToken: ''
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage('user', initialState);

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser('user', initialState);
    }

    return(
        <AuthContext.Provider value={{user, login, logout, isAuthenticated: Boolean(user.accessToken)}}>
            {children}
        </AuthContext.Provider>
    )
}

export const usAuthContext = () => useContext(AuthContext);