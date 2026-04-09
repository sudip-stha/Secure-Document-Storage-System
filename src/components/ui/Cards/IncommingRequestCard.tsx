import type { RequestCardType } from "../../../types/data";
import Button from "../Button/Button";

const IncommingRequestCard = ({
  filename,
  fileIconPath,
  owner,
  message,
}: RequestCardType) => {
  return (
    <div className="min-w-6xl font-dmsans bg-elevated-surface rounded-2xl border border-subtle-border p-6">
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
              Requested by {owner}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button size={"sm"} iconPath="/icons/tickIcon.svg" iconPlace="front">
            Approve
          </Button>
          <Button
            variant={"quaternary"}
            size={"sm"}
            iconPlace="front"
            className="flex items-center"
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path
                d="M6.575 7.975L1.675 12.875C1.49167 13.0583 1.25833 13.15 0.975 13.15C0.691667 13.15 0.458333 13.0583 0.275 12.875C0.0916663 12.6917 0 12.4583 0 12.175C0 11.8917 0.0916663 11.6583 0.275 11.475L5.175 6.575L0.275 1.675C0.0916663 1.49167 0 1.25833 0 0.975C0 0.691667 0.0916663 0.458333 0.275 0.275C0.458333 0.0916663 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916663 1.675 0.275L6.575 5.175L11.475 0.275C11.6583 0.0916663 11.8917 0 12.175 0C12.4583 0 12.6917 0.0916663 12.875 0.275C13.0583 0.458333 13.15 0.691667 13.15 0.975C13.15 1.25833 13.0583 1.49167 12.875 1.675L7.975 6.575L12.875 11.475C13.0583 11.6583 13.15 11.8917 13.15 12.175C13.15 12.4583 13.0583 12.6917 12.875 12.875C12.6917 13.0583 12.4583 13.15 12.175 13.15C11.8917 13.15 11.6583 13.0583 11.475 12.875L6.575 7.975Z"
                fill="currentColor"
              />
            </svg>
            Deny
          </Button>
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

export default IncommingRequestCard;
