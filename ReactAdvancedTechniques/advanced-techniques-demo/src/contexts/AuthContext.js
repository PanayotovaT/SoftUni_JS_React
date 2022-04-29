import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    email: '',
}

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);

    const login = (email) => {
        setUser({
            email,
        })
    }

    const isAuthenticated = Boolean(user.email);

    return (
        <AuthContext.Provider value={{user, login, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authData = useContext(AuthContext);
    return authData;
}