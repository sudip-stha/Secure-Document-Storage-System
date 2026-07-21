import { useParams } from "react-router-dom";
import FilePreviewHeader from "./components/FilePreviewHeader";
import { documentTableList } from "../../../data/documentTableList";

const FilePreview = () => {
  const startTimer = true;
  const { fileId } = useParams();

  const openFile = documentTableList.tableData.find(
    (file) => Number(fileId) === file.id,
  );

  return (
    <div className="bg-raised-surface min-h-dvh">
      <FilePreviewHeader
        fileName={openFile?.name}
        fileOwner={openFile?.owner}
        startTimer={startTimer}
      />
      <div className="bg-white min-h-[88dvh] mx-35 mt-3 rounded-t-2xl"></div>
    </div>
  );
};

export default FilePreview;
