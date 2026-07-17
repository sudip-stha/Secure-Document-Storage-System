import { useParams } from "react-router-dom";

const FilePreview = () => {
  const { fileId } = useParams();
  
  return (
    <div>
      <h1 className="text-9xl">Your open file {fileId}</h1>
    </div>
  );
};

export default FilePreview;
