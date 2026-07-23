import { notificationData } from "../../../../data/NotificationData";
import { useButtonAction } from "../../../../hooks/useButtonAction";
import Heading2 from "../../../ui/Heading2";
import NotificationEmpty from "./NotificationEmpty";
import NotificationList from "./NotificationList";

const NotificationModal = () => {
  const setButtonAction = useButtonAction((state) => state.setButtonAction);
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);

  function handleCloseModal() {
    setButtonAction("");
    setIsModalOpen(false);
  }
  return (
    <div
      className="bg-overlay-surface min-h-dvh flex flex-col gap-9 p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between">
        <Heading2 value="Notifications" />
        <button className="cursor-pointer" onClick={handleCloseModal}>
          <img src="/icons/crossIcon.svg" alt="" className="w-3" />
        </button>
      </div>
      <div className="max-h-[85vh] overflow-auto scrollbar scrollbar-thumb-overlay-surface scrollbar-track-transparent">
        {notificationData.length > 0 ? (
          <NotificationList />
        ) : (
          <NotificationEmpty />
        )}
      </div>
    </div>
  );
};

export default NotificationModal;
