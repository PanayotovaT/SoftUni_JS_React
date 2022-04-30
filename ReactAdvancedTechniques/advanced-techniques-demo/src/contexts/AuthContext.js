import { createContext, useState, useContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
    email: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, email: action.payload };
        case 'LOGOUT' :
            return initialState;
        default:
            return state;
    }

}

export const AuthProvider = ({
    children
}) => {
    // const [user, setUser] = useState(initialState);
    const [user, dispatch] = useReducer(reducer, initialState);

    const login = (email) => {
        // setUser({
        //     email,
        // })
        dispatch({
            type: 'LOGIN',
            payload: email
        });
    }

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
        })
    }

    const isAuthenticated = Boolean(user.email);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authData = useContext(AuthContext);
    return authData;
}