import { documentTableList } from "../../../data/documentTableList";
import getFileIcon from "../../../utils/getFileIcon";

const DocumentTableList = () => {
  const statusStyle = {
    Owned: "text-blue-300 border-blue-400 bg-authorisation-viewing-bg",
    Authorized:
      "text-authorisation-approved-text border-status-success-600 bg-status-success-900",
    Locked:
      "text-text-secondary border-authorisation-locked-border bg-authorisation-locked-bg",
    Pending:
      "text-authorisation-pending-text border-authorisation-pending-border bg-authorisation-pending-bg",
  } as const;

  const statusIcon = {
    Owned: "/icons/ownedIcon.svg",
    Authorized: "/icons/authorizedIcon.svg",
    Locked: "/icons/lockedStatusIcon.svg",
    Pending: "/icons/pendingIcon.svg",
  } as const;

  return (
    <div className="mb-10">
      {documentTableList.tableData.map((value) => (
        <div
          key={value.id}
          className={`flex gap-6 items-center text-text-secondary font-dmsans text-[14px] px-8 py-4 border-[1.5px] border-t-0 border-strong-border last:rounded-b-2xl`}
        >
          <span className="font-semibold flex gap-3 w-91">
            <img
              src={getFileIcon({ fileName: value.name })}
              alt=""
              className="h-4"
            />
            {value.name}
          </span>

          <div className="w-23.5 flex justify-end items-end">
            <span
              className={`flex gap-1 px-3 py-1 ${value.status === "" ? "" : "border"} rounded-xl text-[10px] ${statusStyle[value.status as keyof typeof statusStyle]}`}
            >
              <img
                src={statusIcon[value.status as keyof typeof statusIcon]}
                alt=""
              />
              {value.status}
            </span>
          </div>
          <span className="w-32">{value.type}</span>
          <span className="w-21">{value.size}</span>
          <span className="w-31">{value.modified} hrs ago</span>
          <span className="w-33">{value.owner}</span>
          {value.status === "Owned" && (
            <span>
              <img src="/icons/dotIcon.svg" alt="" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default DocumentTableList;
