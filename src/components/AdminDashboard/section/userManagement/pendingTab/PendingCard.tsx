import type { RegistrationNotificationCardProps } from "../../../../../types/data";
import Button from "../../../../ui/Button/Button";
import Heading2 from "../../../../ui/Heading2";

const PendingCard = ({
  data,
  onApproveUser,
  onRejectUser,
}: RegistrationNotificationCardProps) => {
  const ProfileLetter = data.name[0]; //.split("")[0]
  return (
    <div className="flex gap-64 items-center font-dmsans p-5 border border-authorisation-pending-border rounded-lg">
      <div className="flex gap-5">
        <Heading2
          value={ProfileLetter}
          className="text-authorisation-pending-text bg-authorisation-pending-border px-4.5 py-2.5 rounded-full"
        />

        <div className="flex flex-col gap-1">
          <span className="font-semibold text-[16px] text-warm-gray-50">
            {data.name}
          </span>
          <div className="min-w-117 text-text-tertiary flex gap-2 items-center">
            <span className="text-[14px]">{data.email}</span>
            <div className="bg-text-tertiary w-0.5 h-0.5 rounded-full"></div>
            <span className="text-[12px]">
              {" "}
              Registered: {data.registeredDate}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant={"sucess"}
          iconPath="/icons/tickIcon.svg"
          iconPlace="front"
          className="px-4 py-2 flex gap-1 items-center"
          onClick={onApproveUser}
        >
          Approve
        </Button>
        <Button
          variant={"danger"}
          iconPath="/icons/rejectIcon.svg"
          iconPlace="front"
          className="px-5 py-2 flex gap-1 items-center"
          onClick={onRejectUser}
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default PendingCard;
