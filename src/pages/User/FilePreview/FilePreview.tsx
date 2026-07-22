import { useParams } from "react-router-dom";
import FilePreviewHeader from "./components/FilePreviewHeader";
import { documentTableList } from "../../../data/documentTableList";
import { useState } from "react";
import AccessExpired from "./components/modal/AccessExpired";
import AccessRevoked from "./components/modal/AccessRevoked";

const FilePreview = () => {
  const [isExpire, setIsExpire] = useState(false);
  const [isPrintingRevoked, setIsPrintingRevoked] = useState(false);
  const startTimer = true;
  const { fileId } = useParams();

  const openFile = documentTableList.tableData.find(
    (file) => Number(fileId) === file.id,
  );

  return (
    <div className="bg-raised-surface min-h-dvh">
      {isExpire && (
        <div className="fixed inset-0 bg-raised-surface flex justify-center items-center">
          <AccessExpired />
        </div>
      )}
      {isPrintingRevoked && (
        <div className="fixed inset-0 bg-raised-surface flex justify-center items-center">
          <AccessRevoked
            revokedMessage="Printing ends your session for security reasons. Please submit a new request if you need further access."
            messageWidth=" max-w-73.5"
          />
        </div>
      )}
      <FilePreviewHeader
        fileName={openFile?.name}
        fileOwner={openFile?.owner}
        startTimer={startTimer}
        onExpire={() => setIsExpire(true)}
        onPrintingRevoked={() => setIsPrintingRevoked(true)}
      />
      <div className="bg-white min-h-[88dvh] mx-35 mt-3 rounded-t-2xl"></div>
    </div>
  );
};

export default FilePreview;
