import type { RegistrationNotificationCardProps } from "../../../../../types/data";
import Button from "../../../../ui/Button/Button";

const RegistrationNotificationCard = ({
  data,
}: RegistrationNotificationCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex font-dmsans">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-[16px] text-warm-gray-300">
            {data.name}
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[14px] text-text-secondary">
              {data.email}
            </span>
            <span className="text-[12px] text-text-tertiary">
              Registered: {data.registeredDate}
            </span>
          </div>
        </div>
        <div>
          <span className="flex gap-1 px-2 py-0.5 text-authorisation-pending-text bg-authorisation-pending-bg border border-status-warning-700 rounded-xl text-[10px]">
            Pending
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant={"sucess"} className="px-9 py-2 rounded-sm">
          Approve
        </Button>
        <Button variant={"danger"} className="px-[42.5px] py-2 rounded-sm">
          Reject
        </Button>
      </div>
    </div>
  );
};

export default RegistrationNotificationCard;
