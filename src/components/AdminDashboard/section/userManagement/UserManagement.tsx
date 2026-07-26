import { useState } from "react";
import Heading2 from "../../../ui/Heading2";
import TabSwitcher from "./TabSwitcher";
import Pending from "./pendingTab/Pending";
import Users from "./usersTab/Users";

const UserManagement = () => {
  const [selectedTab, setSelectedTab] = useState("Pending");

  function currentTab(tab: string) {
    setSelectedTab(tab);
  }
  return (
    <div>
      <div>
        <Heading2 value="User Management" />
        <span>Review registration and manage user accounts</span>
      </div>
      <div>
        <TabSwitcher currentTab={currentTab} />
        {selectedTab === "Pending" && <Pending />}
        {selectedTab === "Users" && <Users />}
      </div>
    </div>
  );
};

export default UserManagement;
