import { createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const initialUser = {
    _id: '',
    username: '',
    accessToken: ''
}

export const AuthContextProvider  = ({ children}) => {
    const [user, setUser] = useState(initialUser);

    const login = (authData) => setUser(authData);

    const logout = () => setUser('user', initialUser);

    return <AuthContext.Provider value={{user, login, logout}} >
        {children}
    </AuthContext.Provider>

}

export const useAuthContext = () => useContext(AuthContext);
