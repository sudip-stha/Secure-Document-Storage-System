import { auditLogsTableData } from "../../../../../../../data/AuditLogsTableData";

const EventTableTitle = () => {
  return (
    <div className="flex gap-12 font-dmsans font-medium text-[16px] text-warm-gray-200 ">
      {auditLogsTableData.auditLogsTableTitle.map((value) => {
        return (
          <div
            key={value}
            className="nth-1:w-32 nth-2:w-40 nth-3:w-20 nth-4:w-90"
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default EventTableTitle;
