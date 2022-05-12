import  Toast from 'react-bootstrap/Toast';
import  ToastHeader from 'react-bootstrap/ToastHeader';

import { useNotifiactionContext } from '../contexts/NotificationContext';

import './Notification.css';

const Notification = () => {
    const { notification, hideNotification } = useNotifiactionContext();

    if(!notification.show) {
        return null;
    }

    const hideHandler = (e) => {
        console.log(e.target);
        hideNotification();
        return;
    }
    return (
        <Toast className="d-inline-block m-1 notification" bg={notification.type}>
            <ToastHeader  closeButton={false}  onClick={hideHandler} >
                {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="notification" /> */}
                <strong className="me-auto">Shared Trip</strong>
            </ToastHeader>
            <Toast.Body >
                {notification.message}
            </Toast.Body>
        </Toast>
    );
}

export default Notification;
