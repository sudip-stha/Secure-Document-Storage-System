import { useButtonAction } from "../../../../hooks/useButtonAction";
import DocumentTableList from "../../../ui/DocumentTable/DocumentTableList";
import DocummentTableTitle from "../../../ui/DocumentTable/DocummentTableTitle";
import CreateFolderModal from "../../../ui/modals/CreateFolderModal";
import DocumentUploadModal from "../../../ui/modals/DocumentUploadModal";
import ButtonContainer from "./ButtonContainer";

const HomeSection = () => {
  const buttonAction = useButtonAction((state) => state.buttonAction);
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);
  const setButtonAction = useButtonAction((state) => state.setButtonAction);

  function handleCloseModal() {
    setIsModalOpen(false);
    setButtonAction("");
  }

  return (
    <div className="flex flex-col gap-5 px-10">
      {buttonAction === "uploaded" && (
        <div
          className="fixed inset-0 flex justify-center items-center z-30"
          onClick={handleCloseModal}
        >
          <DocumentUploadModal />
        </div>
      )}

       {buttonAction === "newFolder" && (
        <div
          className="fixed inset-0 flex justify-center items-center z-30"
          onClick={handleCloseModal}
        >
          <CreateFolderModal />
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
