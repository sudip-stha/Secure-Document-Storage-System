import { useState } from "react";
import type { TabSwitcherProps } from "../../../../types/data";
import { registrationNotificationData } from "../../../../data/registrationNotificationData";

const TabSwitcher = ({ currentTab }: TabSwitcherProps) => {
  const [selectedTab, setSelectedTab] = useState("Pending");
  const totalPending = registrationNotificationData.length;

  function handlePendingTab() {
    currentTab("Pending");
    setSelectedTab("Pending");
  }

  function handleUsersTab() {
    currentTab("Users");
    setSelectedTab("Users");
  }

  return (
    <div className="flex items-center py-1 rounded-lg bg-elevated-surface font-dmsans font-medium text-[16px]">
      <button
        className={`text-text-secondary rounded-lg py-2 px-17 ${selectedTab === "Pending" && "bg-warm-gray-600 text-white"}`}
        onClick={handlePendingTab}
      >
        <span> Pending({totalPending})</span>
      </button>
      <button
        className={`text-text-secondary rounded-lg py-2 px-20 ${selectedTab === "Users" && "bg-warm-gray-600 text-white"} `}
        onClick={handleUsersTab}
      >
        Users
      </button>
    </div>
  );
};

export default TabSwitcher;
