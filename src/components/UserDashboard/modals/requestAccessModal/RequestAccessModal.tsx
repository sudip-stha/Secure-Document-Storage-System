import { useButtonAction } from "../../../../hooks/useButtonAction";
import type { requestDocumentDetailsType } from "../../../../types/data";
import Button from "../../../ui/Button/Button";
import Heading1 from "../../../ui/Heading1";
import Heading3 from "../../../ui/Heading3";
import RequestModalNote from "./RequestModalNote";

const RequestAccessModal = ({
  requestDocumentDetails,
  onClose,
}: requestDocumentDetailsType) => {
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);

  function handleOnClose() {
    onClose();
    setIsModalOpen(false);
  }

  return (
    <div
      className="bg-elevated-surface flex flex-col gap-7 min-w-125 border border-default-border rounded-2xl p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between">
        <Heading1 value="Request Access" />
        <button className="cursor-pointer" onClick={handleOnClose}>
          <img src="/icons/crossIcon.svg" alt="" className="w-3" />
        </button>
      </div>

      <div className="flex flex-col gap-1 bg-overlay-surface rounded-lg border border-subtle-border px-4 py-5 ">
        <span>{requestDocumentDetails.name}</span>
        <span>{requestDocumentDetails.owner}</span>
      </div>

      <Heading3 value="Justification (optional)" />
      <textarea
        className="bg-elevated-surface min-w-110 border border-strong-border rounded-lg p-2 text-text-tertiary"
        placeholder="Explain why you need to access this document"
      />

      <div className="flex flex-col gap-3">
        <RequestModalNote />
        <Button size={"md"} iconPath="/icons/submitIcon.svg" iconPlace="front">
          Submit Request
        </Button>
      </div>
    </div>
  );
};

export default RequestAccessModal;
