import { useState } from "react";
import { registrationNotificationData } from "../../../../../data/registrationNotificationData";
import PendingCard from "./PendingCard";
import type { RegistrationNotificationDataType } from "../../../../../types/data";
import toast, { Toaster } from "react-hot-toast";

const Pending = () => {
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
    <div className="flex flex-col gap-3">
      <Toaster position="top-right" reverseOrder={false} />
      {users.map((data) => {
        return (
          <PendingCard
            key={data.email}
            data={data}
            onApproveUser={() => handleApproveUser(data)}
            onRejectUser={() => handleRejectUser(data)}
          />
        );
      })}
    </div>
  );
};

export default Pending;
