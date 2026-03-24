import { useButtonAction } from "../../../../hooks/useButtonAction";
import DocumentTableList from "../../../ui/DocumentTable/DocumentTableList";
import DocummentTableTitle from "../../../ui/DocumentTable/DocummentTableTitle";
import DocumentUploadModal from "../../../ui/modals/DocumentUploadModal";
import ButtonContainer from "./ButtonContainer";

const HomeSection = () => {
  const buttonAction = useButtonAction((state) => state.buttonAction);

  return (
    <div className="flex flex-col gap-5 px-10">
      {buttonAction === "uploaded" && (
        <div className="fixed inset-0 flex justify-center items-center">
          <DocumentUploadModal />
        </div>
      )}
      <div className="flex gap-2.25 py-6.5">
        <img src={"/icons/documentHomeIcon.svg"} alt="" />
        <img src={"/icons/greaterIcon.svg"} alt="" />
        <h2 className="text-text-primary">Documents</h2>
      </div>

      <ButtonContainer />
      <div>
        <DocummentTableTitle />
        <DocumentTableList />
      </div>
    </div>
  );
};

export default HomeSection;
