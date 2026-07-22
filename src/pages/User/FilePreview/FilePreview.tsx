import { useParams } from "react-router-dom";
import FilePreviewHeader from "./components/FilePreviewHeader";
import { documentTableList } from "../../../data/documentTableList";
import { useState } from "react";
import AccessExpired from "./components/modal/AccessExpired";

const FilePreview = () => {
  const [isExpire, setIsExpire] = useState(false);
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
      <FilePreviewHeader
        fileName={openFile?.name}
        fileOwner={openFile?.owner}
        startTimer={startTimer}
        onExpire={() => setIsExpire(true)}
      />
      <div className="bg-white min-h-[88dvh] mx-35 mt-3 rounded-t-2xl"></div>
    </div>
  );
};

export default FilePreview;
