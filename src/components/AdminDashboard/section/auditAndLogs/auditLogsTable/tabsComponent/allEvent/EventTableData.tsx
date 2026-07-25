import { auditLogsTableData } from "../../../../../../../data/AuditLogsTableData";

const EventTableData = () => {
  return (
    <div className="flex flex-col gap-7">
      {auditLogsTableData.auditLogsTableContent.map((data) => {
        return (
          <div
            key={data.id}
            className="flex gap-12 font-dmsans text-[14px] text-text-secondary"
          >
            <span className="w-32">{data.timeStamp}</span>
            <span className="w-40">{data.eventType}</span>
            <span className="w-20">{data.user}</span>
            <span className="w-90">{data.details}</span>
          </div>
        );
      })}
    </div>
  );
};

export default EventTableData;
