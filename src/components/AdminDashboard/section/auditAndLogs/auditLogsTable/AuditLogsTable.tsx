import AuditLogsNaviagteList from "./AuditLogsNaviagteList";

const AuditLogsTable = () => {
  return (
    <div className="border border-default-border overflow-hidden rounded-lg bg-overlay-surface">
      <div className="flex gap-25 items-center bg-warm-gray-700 px-3 py-2">
        <span className="font-dmsans font-medium text-[16px] text-text-primary">
          Audit Logs
        </span>
      </div>
      <div>
        <AuditLogsNaviagteList />
      </div>
    </div>
  );
};

export default AuditLogsTable;
