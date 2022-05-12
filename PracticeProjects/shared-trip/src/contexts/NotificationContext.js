import { useState, useCallback, createContext, useContext } from 'react';

const NotificationContext = createContext();

export const types = {
    success: 'success',
    error: 'danger',
    warn: 'warning',
    info: 'info'
}

const initialNotificationState = {
    show: false,
    message: '',
    type: types.error

}

export const NotifiactionProvider = ({ children }) => {
    const [notification, setNotification] = useState(initialNotificationState);

    const showNotification = useCallback((message, type= types.error) => {
        setNotification({show: true, message, type });

        setTimeout(() => setNotification(initialNotificationState), 5000);
    }, []);

    const hideNotification = useCallback(() => setNotification(initialNotificationState), []);

    return (
        <NotificationContext.Provider value={{showNotification, hideNotification, notification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotifiactionContext = () => useContext(NotificationContext);

