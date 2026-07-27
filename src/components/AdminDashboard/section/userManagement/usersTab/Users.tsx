import { useState } from "react";
import { userStatusData } from "../../../../../data/userStatusData";
import { useButtonAction } from "../../../../../hooks/useButtonAction";
import type { UserStatusDataType } from "../../../../../types/data";
import SuspendModal from "./modals/SuspendModal";
import UserCard from "./userCard/UserCard";
import ReactivateModal from "./modals/ReactivateModal";

const Users = () => {
  const [users, setUsers] = useState<UserStatusDataType[]>(userStatusData);
  const [userPendingSuspension, setUserPendingSuspension] =
    useState<UserStatusDataType | null>(null);
  const [userPendingReactivation, setUserPendingReactivation] =
    useState<UserStatusDataType | null>(null);

  const buttonAction = useButtonAction((state) => state.buttonAction);
  const setButtonAction = useButtonAction((state) => state.setButtonAction);
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);

  function handleSuspendClick(user: UserStatusDataType) {
    setUserPendingSuspension(user);
    setButtonAction("suspend");
    setIsModalOpen(true);
  }

  function closeSuspendModal() {
    setUserPendingSuspension(null);
    setButtonAction("");
    setIsModalOpen(false);
  }

  function onSuspendConfirm() {
    if (!userPendingSuspension) return;
    setUsers((prev) =>
      prev.map((u) =>
        u.email === userPendingSuspension.email ? { ...u, isActive: false } : u,
      ),
    );
    closeSuspendModal();
  }

  function handleReactivateClick(user: UserStatusDataType) {
    setUserPendingReactivation(user);
    setButtonAction("reactivate");
    setIsModalOpen(true);
  }

  function closeReactivateModal() {
    setUserPendingReactivation(null);
    setButtonAction("");
    setIsModalOpen(false);
  }

  function onReactivateConfirm() {
    if (!userPendingReactivation) return;
    setUsers((prev) =>
      prev.map((u) =>
        u.email === userPendingReactivation.email
          ? { ...u, isActive: true }
          : u,
      ),
    );
    closeReactivateModal();
  }

  return (
    <div className="flex flex-col gap-3">
      {buttonAction === "suspend" && userPendingSuspension && (
        <div
          className="fixed inset-0 flex items-center justify-center z-40"
          onClick={closeSuspendModal}
        >
          <SuspendModal onSuspendConfirm={onSuspendConfirm} />
        </div>
      )}

      {buttonAction === "reactivate" && userPendingReactivation && (
        <div
          className="fixed inset-0 flex items-center justify-center z-40"
          onClick={closeReactivateModal}
        >
          <ReactivateModal onReactivateConfirm={onReactivateConfirm} />
        </div>
      )}

      {users.map((data) => (
        <UserCard
          key={data.email}
          data={data}
          onSuspendClick={() => handleSuspendClick(data)}
          onReactivateClick={() => handleReactivateClick(data)}
        />
      ))}
    </div>
  );
};

export default Users;
