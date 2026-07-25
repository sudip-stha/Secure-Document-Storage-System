import { registrationNotificationData } from "../../../../data/registrationNotificationData";
import AuditLogsTable from "./auditLogsTable/AuditLogsTable";
import RegistrationQueue from "./registrationQueue/RegistrationQueue";
import StatContainer from "./StatContainer";

const AuditAndLogs = () => {
  return (
    <div className="pl-3 mb-6 flex flex-col gap-6">
      <StatContainer />
      <div className="flex gap-3">
        {registrationNotificationData.length > 0 ? <RegistrationQueue /> : ""}

        <AuditLogsTable />
      </div>
    </div>
  );
};

export default AuditAndLogs;
