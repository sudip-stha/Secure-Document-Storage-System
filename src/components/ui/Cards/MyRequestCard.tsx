import { statusIcon } from "../../../constants/statusIcon";
import { statusStyle } from "../../../constants/statusStyle";

const MyRequestCard = ({ filename, fileIconPath, message, status }) => {
  return (
    <div className="min-w-6xl flex flex-col gap-6 font-dmsans bg-elevated-surface rounded-2xl border border-subtle-border p-6">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="bg-authorisation-expired-border p-2 h-9 rounded-lg">
            <img src={fileIconPath} alt="" className="w-5" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-white font-semibold teext-[16px]">
              {filename}
            </span>
            <span className="flex gap-2 text-[12px] text-warm-gray-300">
              <img src="/icons/profileIcon.svg" alt="" className="w-2.25" />
              Requested by You
            </span>
          </div>
        </div>

        <div className="w-23.5 flex justify-end items-start">
          <span
            className={`flex gap-1 px-3 py-1 ${status === "" ? "" : "border"} rounded-xl text-[10px] ${statusStyle[status as keyof typeof statusStyle]}`}
          >
            <img src={statusIcon[status as keyof typeof statusIcon]} alt="" />
            {status}
          </span>
        </div>
      </div>
      <div className="max-w-235 rounded-lg bg-overlay-surface p-6 flex flex-col gap-2 border border-default-border">
        <div className="flex gap-2">
          <img src="/icons/messageIcon.svg" alt="" />

          <span className="font-semibold teext-[16px] text-text-primary">
            Justification
          </span>
        </div>
        <span className="italic text-[14px] text-warm-gray-300">{`"${message}"`}</span>
      </div>
    </div>
  );
};

export default MyRequestCard;
