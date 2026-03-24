import type { FileNameType } from "../types/data";

export default function getFileIcon({ fileName }:FileNameType) {
  const fileType = fileName.split(".").pop()?.toLowerCase();
  
  switch (fileType) {
    case "xlsx":
      return "/icons/excelFileIcon.png";

    case "pdf":
      return "/icons/pdfFileIcon.svg";

    case "docx":
      return "/icons/docFileIcon.png";

    default:
      return "/icons/folderOpenIcon.png";
  }
}
