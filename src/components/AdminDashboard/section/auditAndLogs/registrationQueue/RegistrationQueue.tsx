import { registrationNotificationData } from "../../../../../data/registrationNotificationData";
import RegistrationNotificationCard from "./RegistrationNotificationCard";

const RegistrationQueue = () => {
  return (
    <div className="border border-default-border overflow-hidden rounded-lg bg-overlay-surface">
      <div className="flex gap-25 items-center bg-warm-gray-700 px-3 py-2">
        <span className="font-dmsans font-medium text-[16px] text-text-primary">
          Registration Queue
        </span>
        <button className="cursor-pointer">
          <img src="/icons/crossIcon.svg" alt="" className="w-3" />
        </button>
      </div>
      <div className="flex flex-col gap-5 px-3 py-4">
        {registrationNotificationData.map((data) => {
          return <RegistrationNotificationCard key={data.email} data={data} />;
        })}
      </div>
    </div>
  );
};

export default RegistrationQueue;
