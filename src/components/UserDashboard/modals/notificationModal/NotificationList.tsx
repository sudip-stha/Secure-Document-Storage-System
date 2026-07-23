import { notificationData } from "../../../../data/NotificationData";
import NotificationCard from "./NotificationCard";

const NotificationList = () => {
  return (
    <div className="flex flex-col gap-3">
      {notificationData.map((notifyItem) => {
        return <NotificationCard key={notifyItem.id} notifyItem={notifyItem} />;
      })}
    </div>
  );
};

export default NotificationList;
