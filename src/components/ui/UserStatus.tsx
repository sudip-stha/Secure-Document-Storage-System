import { twMerge } from "tailwind-merge";
import type { UserStatusType } from "../../types/data";
import clsx from "clsx";

const UserStatus = ({ value, className }: UserStatusType) => {
  return (
    <div
      className={twMerge(
        clsx(
          "flex gap-1 items-center px-2.5 py-1 rounded-sm border",
          className,
        ),
      )}
    >
      <span
        className={`w-1 h-1 rounded-full ${value === "Active" ? "bg-status-success-400" : "bg-[#D78028]"}`}
      ></span>
      <span className="font-dmsans font-semibold text-[12px]">{value}</span>
    </div>
  );
};

export default UserStatus;
