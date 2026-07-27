import { useState } from "react";
import { registrationNotificationData } from "../../../../../data/registrationNotificationData";
import type { RegistrationNotificationDataType } from "../../../../../types/data";
import RegistrationNotificationCard from "./RegistrationNotificationCard";
import toast, { Toaster } from "react-hot-toast";

const RegistrationQueue = () => {
  const [users, setUsers] = useState<RegistrationNotificationDataType[]>(
    registrationNotificationData,
  );

  function handleApproveUser(data: RegistrationNotificationDataType) {
    setUsers(users.filter((user) => user.email !== data.email));
    toast.success("User approved successfully!");
  }
  function handleRejectUser(data: RegistrationNotificationDataType) {
    setUsers(users.filter((user) => user.email !== data.email));
    toast.error("User rejected.");
  }
  return (
    <div className="border border-default-border overflow-hidden rounded-lg bg-overlay-surface">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex gap-25 items-center bg-warm-gray-700 px-3 py-2">
        <span className="font-dmsans font-medium text-[16px] text-text-primary">
          Registration Queue
        </span>
        <button className="cursor-pointer">
          <img src="/icons/crossIcon.svg" alt="" className="w-3" />
        </button>
      </div>
      <div className="flex flex-col gap-5 px-3 py-4">
        {users.map((data) => {
          return (
            <RegistrationNotificationCard
              key={data.email}
              data={data}
              onApproveUser={() => handleApproveUser(data)}
              onRejectUser={() => handleRejectUser(data)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RegistrationQueue;
