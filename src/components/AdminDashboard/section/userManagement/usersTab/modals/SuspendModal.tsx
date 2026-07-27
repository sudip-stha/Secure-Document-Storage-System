import type { SuspendModalType } from "../../../../../../types/data";
import Button from "../../../../../ui/Button/Button";
import Heading2 from "../../../../../ui/Heading2";

const SuspendModal = ({ onSuspendConfirm, onCancel }: SuspendModalType) => {
  return (
    <div
      className="flex flex-col gap-10 items-end bg-warm-gray-700 rounded-2xl p-7 border border-subtle-border "
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col gap-4">
        <Heading2 value="Suspend the User" />
        <span className="font-dmsans text-[16px] text-text-secondary">
          It cannot be undone. Please confirm if you want to suspend?
        </span>
      </div>
      <div className="flex gap-2">
        <Button
          variant={"fileAction"}
          size={"xl"}
          className="px-6"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button size={"xl"} onClick={onSuspendConfirm}>
          Suspend
        </Button>
      </div>
    </div>
  );
};

export default SuspendModal;
