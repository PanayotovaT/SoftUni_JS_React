import { createContext, useContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

const initialNotification = {
    show: false,
    message: '',
}

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(initialNotification);

    const showNotification = useCallback((message) => {
        setNotification({ show: true, message });

        setTimeout(() => {
            setNotification(initialNotification)
        }, 5000);
    }, []);

    const hideNotification = useCallback(() => {
        setNotification(initialNotification);
    }, [])

    return (
        <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationContext = () => {
    return useContext(NotificationContext)
}