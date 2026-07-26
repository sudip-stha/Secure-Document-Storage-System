import type { RegistrationNotificationCardProps } from "../../../../../types/data";
import Button from "../../../../ui/Button/Button";

const PendingCard = ({ data }: RegistrationNotificationCardProps) => {
  const ProfileLetter = data.name[0]; //.split("")[0]
  return (
    <div className="flex gap-64 items-center font-dmsans">
      <div className="flex gap-5">
        <div>
          <span>{ProfileLetter}</span>
        </div>
        <div>
          <span>{data.name}</span>
          <div className="min-w-117">
            <span>{data.email}</span>
            <span>Registered: {data.registeredDate}</span>
          </div>
        </div>
      </div>
      <div>
        <Button>Approve</Button>
        <Button>Reject</Button>
      </div>
    </div>
  );
};

export default PendingCard;
