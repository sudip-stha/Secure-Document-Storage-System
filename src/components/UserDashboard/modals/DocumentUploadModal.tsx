import { useState, type ChangeEvent } from "react";
import { useButtonAction } from "../../../hooks/useButtonAction";
import Button from "../../ui/Button/Button";
import Heading1 from "../../ui/Heading1";

const DocumentUploadModal = () => {
  const [uploadedFile, setUploadedFile] = useState({
    id: "",
    name: "",
    status: "",
    type: "",
    size: "",
    modified: "",
    owner: "",
  });

  const setButtonAction = useButtonAction((state) => state.setButtonAction);
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);

  function handleCloseModal() {
    setButtonAction("");
    setIsModalOpen(false);
  }

  function handleUploadedFileChange(e: ChangeEvent<HTMLInputElement>) {
    const filePath = e.target.files![0];
    const fileName = filePath.name;
    const fileExtension = fileName.split(".").pop()?.toLowerCase();
    const fileSize = filePath.size;
    const fileURL = URL.createObjectURL(filePath);

    setButtonAction("");
    setIsModalOpen(false);
  }

  return (
    <div
      className="bg-overlay-surface flex flex-col gap-8 p-8 rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-0.5">
          <Heading1 value="Upload Document" />
          <p className="font-dmsans text-[14px] text-warm-gray-200">
            Upload a new document to the document storage
          </p>
        </div>
        <button className="cursor-pointer" onClick={handleCloseModal}>
          <img src="/icons/crossIcon.svg" alt="" className="w-3" />
        </button>
      </div>
      <div className="bg-top-surface flex flex-col gap-4 items-center rounded-2xl border border-dashed border-gray-500 px-30 py-10">
        <div className="flex flex-col gap-1 items-center">
          <div className="bg-blue-900 w-14 border border-authorisation-viewing-border px-4 py-4.25 rounded-full">
            <img src="/icons/uploaededFileIcon.svg" alt="" />
          </div>
          <p className="font-dmsans font-medium text-[16px] text-text-primary">
            Drag & drop your File here
          </p>
        </div>
        <p className="font-dmsans text-[16px] text-text-secondary">or</p>
        <Button variant={"secondary"} className="font-medium px-7.5 py-3">
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handleUploadedFileChange}
            className="opacity-0 absolute"
          />
          Browse Files
        </Button>
      </div>

      <div className="flex flex-col gap-0.5 font-dmsans text-[14px] text-text-secondary">
        <p>Supported format: PDF, DOCX, TXT</p>
        <p>Maximum File Size: 50MB</p>
      </div>
    </div>
  );
};

export default DocumentUploadModal;
