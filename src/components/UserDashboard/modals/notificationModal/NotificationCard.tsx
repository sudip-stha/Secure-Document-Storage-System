import type { NotifyItemProps } from "../../../../types/data";
import getNotifyMessageIcon from "../../../../utils/getNotifyMessageIcon";

const NotificationCard = ({ notifyItem }: NotifyItemProps) => {
  return (
    <div className="flex flex-col gap-2 border border-subtle-border rounded-lg pl-5 pr-14 py-3">
      <div className="flex gap-3">
        <img
          src={getNotifyMessageIcon({ fileName: notifyItem.title })}
          alt=""
          className="w-5 h-5"
        />
        <span className="font-dmsans font-semibold text-[16px] text-text-primary">
          {notifyItem.title}
        </span>
      </div>
      <div className="flex flex-col gap-1 font-dmsans text-text-tertiary ml-8">
        <p className="font-medium text-[14px] w-75">{notifyItem.message}</p>
        <span className="text-[12px]">{notifyItem.date}</span>
      </div>
    </div>
  );
};

export default NotificationCard;
