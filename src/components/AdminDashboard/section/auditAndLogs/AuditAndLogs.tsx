import RegistrationQueue from "./registrationQueue/RegistrationQueue";
import StatContainer from "./StatContainer";

const AuditAndLogs = () => {
  return (
    <div className="pl-3 mb-6 flex flex-col gap-6">
      <StatContainer />
      <div className="flex gap-3">
        <RegistrationQueue />
      </div>
    </div>
  );
};

export default AuditAndLogs;
