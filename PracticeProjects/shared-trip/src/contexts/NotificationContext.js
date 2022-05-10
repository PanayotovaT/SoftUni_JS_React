import { useState, useCallback, createContext, useContext } from 'react';

const NotificationContext = createContext();

const types = {
    sucess: 'success',
    error: 'danger',
    warn: 'warning',
    info: 'info'
}

const initialNotificatioState = {
    show: false,
    message: '',
    type: types.error

}

export const NotifiactionProvider = ({ children }) => {
    const [notification, setNotification] = useState(initialNotificatioState);

    const showNotification = useCallback((message, type= types.error) => {
        setNotification({show: true, message, type });

        setTimeout(() => setNotification(initialNotificatioState), 5000);
    }, []);

    const hideNotification = useCallback(() => {
        setNotification(initialNotificatioState);
    }, []);

    return (
        <NotificationContext.Provider value={{showNotification, hideNotification, notification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotifiactionContext = () => useContext(NotificationContext);

