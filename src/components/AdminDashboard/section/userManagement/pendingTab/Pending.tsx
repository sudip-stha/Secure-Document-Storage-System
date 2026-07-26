import { registrationNotificationData } from "../../../../../data/registrationNotificationData";
import PendingCard from "./PendingCard";

const Pending = () => {
  return (
    <div className="flex flex-col gap-3">
      {registrationNotificationData.map((data) => {
        return <PendingCard key={data.email} data={data} />;
      })}
    </div>
  );
};

export default Pending;
