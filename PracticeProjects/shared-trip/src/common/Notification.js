import  Toast from 'react-bootstrap/Toast';

import { useNotifiactionContext } from '../contexts/NotificationContext';

import './Notification.css';

const Notification = () => {
    const { notification, hideNotification } = useNotifiactionContext();

    if(!notification.show) {
        return null;
    }

    return (
        <Toast className="d-inline-block m-1 notification" bg={notification.type}>
            <Toast.Header onClose={hideNotification}>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="notification" />
                <strong className="me-auto">Bootstrap</strong>
            </Toast.Header>
            <Toast.Body >
                {notification.message}
            </Toast.Body>
        </Toast>
    );
}

export default Notification;
