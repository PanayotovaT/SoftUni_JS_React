import { useNotificationContext } from "../contexts/NotificationContext";

const NotificationSection = () => {
    const { notification } = useNotificationContext();

    return notification.show
        ? (
            <div>
                <div className="notificationContainer">
                    <p>{notification.message}</p>
                </div>
            </div>
        )
        : null;
}

export default NotificationSection;