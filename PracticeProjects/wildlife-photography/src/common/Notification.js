import Toast from 'react-bootstrap/Toast';
import { useNotificationContext } from "../contexts/NotificationContext";

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    return (
        <Toast className="d-inline-block m-1" bg={notification.type} show={notification.show}>
            <Toast.Header onClose={hideNotification}>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="123" />
                <strong className="me-auto">Wildlife Photograpy</strong>
                
            </Toast.Header>
            <Toast.Body >
                {notification.message}
            </Toast.Body>
        </Toast>
    )
}

export default Notification