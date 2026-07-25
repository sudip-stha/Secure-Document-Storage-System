import { NavLink, useSearchParams } from "react-router-dom";
import { auditLogsTableData } from "../../../../../data/AuditLogsTableData";
import { appRoutes } from "../../../../../routes/routes";
import AllEvent from "./tabsComponent/AllEvent";
import Registrations from "./tabsComponent/Registrations";
import Logins from "./tabsComponent/Logins";
import Uploads from "./tabsComponent/Uploads";
import Requests from "./tabsComponent/Requests";

const AuditLogsNaviagteList = () => {
  const [searchParam] = useSearchParams();
  const visitedTab = searchParam.get("tab") || "all";

  return (
    <div className="mt-3 ml-3">
      <ul className="flex ">
        {auditLogsTableData.auditLogsNavigationList.map((item) => {
          return (
            <li
              key={item.label}
              className="font-dmsans font-medium text-[16px]"
            >
              <NavLink
                to={`${appRoutes.AdminAuditLogs}?tab=${item.value}`}
                className={
                  visitedTab === item.value
                    ? "bg-warm-gray-600 px-3 py-2 text-text-primary rounded-lg"
                    : "text-text-secondary px-3 py-2"
                }
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
      {visitedTab === "all" && <AllEvent />}
      {visitedTab === "registrations" && <Registrations />}
      {visitedTab === "logins" && <Logins />}
      {visitedTab === "uploads" && <Uploads />}
      {visitedTab === "requests" && <Requests />}
    </div>
  );
};

export default AuditLogsNaviagteList;
