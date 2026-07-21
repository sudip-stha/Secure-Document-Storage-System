import { Link } from "react-router-dom";
import type { FilePreviewHeaderProps } from "../../../../types/data";
import { appRoutes } from "../../../../routes/routes";
import Button from "../../../../components/ui/Button/Button";
import CountDownTimer from "./CountDownTimer";

const FilePreviewHeader = ({ fileName, fileOwner }: FilePreviewHeaderProps) => {
  return (
    <header className="flex justify-between items-center bg-overlay-surface px-8.5 py-4">
      <div className="flex gap-7 ">
        <Link
          to={appRoutes.UserHome}
          className=" flex items-center gap-3 text-text-secondary"
        >
          <img src="/icons/leftArrow.svg" alt="" className="w-4.5" />
        </Link>
        <div className="flex flex-col gap-0.5 font-dmsans">
          <h1 className="text-white font-semibold text-[16px]">{fileName}</h1>
          <h3 className="text-cold-gray-300 text-[12px]">Owner: {fileOwner}</h3>
        </div>
      </div>

      <div className="flex gap-7">
        <CountDownTimer />
        <div className="flex gap-2.5 items-center">
          <Button
            className={"py-3"}
            variant={"fileAction"}
            size={"sm"}
            iconPath={"/icons/downloadIcon.svg"}
            iconPlace="front"
          >
            Download
          </Button>
          <Button
            className={"py-3"}
            variant={"fileAction"}
            size={"lg"}
            iconPath={"/icons/printIcon.svg"}
            iconPlace="front"
          >
            Print
          </Button>
        </div>
      </div>
    </header>
  );
};

export default FilePreviewHeader;
