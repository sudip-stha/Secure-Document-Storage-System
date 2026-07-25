import { registrationNotificationData } from "../../../../../../../data/registrationNotificationData";
import EventTableData from "./EventTableData";
import EventTableTitle from "./EventTableTitle";

const AllEvent = () => {
  const isRegisterQueuePresent = registrationNotificationData.length > 0;
  return (
    <div
      className={`ml-4 flex flex-col gap-8 ${!isRegisterQueuePresent && "min-w-290"}`}
    >
      <EventTableTitle />
      <EventTableData />
    </div>
  );
};

export default AllEvent;
