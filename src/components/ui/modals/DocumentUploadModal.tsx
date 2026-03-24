import Button from "../Button/Button";

const DocumentUploadModal = () => {
  return (
    <div className="bg-overlay-surface flex flex-col gap-8 p-8 rounded-xl">
      <div className="flex flex-col gap-0.5">
        <h1 className="font-poppins font-bold text-[24px] text-text-primary">
          Upload Document
        </h1>
        <p className="font-dmsans text-[14px] text-warm-gray-200">
          Upload a new document to the document storage
        </p>
      </div>
      <div className="bg-top-surface flex flex-col gap-4 items-center rounded-2xl border border-dashed border-gray-500 px-30 py-10">
        <div className="flex flex-col gap-1 items-center">
          <div className="bg-blue-900 w-14 border border-authorisation-viewing-border px-4 py-4.25 rounded-full">
            <img src="/public/icons/uploaededFileIcon.svg" alt="" />
          </div>
          <p className="font-dmsans font-medium text-[16px] text-text-primary">
            Drag & drop your File here
          </p>
        </div>
        <p className="font-dmsans text-[16px] text-text-secondary">or</p>
        <Button variant={"secondary"} className="font-medium px-7.5 py-3">
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
