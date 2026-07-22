import { useButtonAction } from "../../../../hooks/useButtonAction";
import CreateFolderModal from "../../modals/CreateFolderModal";
import DocumentUploadModal from "../../modals/DocumentUploadModal";
import FilterModal from "../../modals/filterModal";
import NameSortingModal from "../../modals/NameSortingModal";
import DocumentTableGrid from "../DocumentTable/DocumentTableGrid";
import DocumentTableList from "../DocumentTable/DocumentTableList";
import DocummentTableTitle from "../DocumentTable/DocummentTableTitle";
import ButtonContainer from "./ButtonContainer";

const HomeSection = () => {
  const buttonAction = useButtonAction((state) => state.buttonAction);
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);
  const setButtonAction = useButtonAction((state) => state.setButtonAction);
  const isListBtnActive = useButtonAction((state) => state.isListBtnActive);

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

      {buttonAction === "nameSorting" && (
        <div className="fixed inset-0 z-20" onClick={handleCloseModal}>
          <div className="fixed top-51.25 left-95 z-30">
            <NameSortingModal />
          </div>
        </div>
      )}

      {buttonAction === "filter" && (
        <div className="fixed inset-0 z-20" onClick={handleCloseModal}>
          <div className="fixed top-51.25 left-118 z-30">
            <FilterModal />
          </div>
        </div>
      )}

      <div className="flex gap-2.25 py-6.5 items-center">
        <img src={"/icons/documentHomeIcon.svg"} alt="" />
        <img src={"/icons/greaterIcon.svg"} alt="" />
        <h2 className="text-text-primary">Documents</h2>
      </div>

      <ButtonContainer />

      {isListBtnActive == "list" ? (
        <div>
          <DocummentTableTitle />
          <DocumentTableList />
        </div>
      ) : (
        <DocumentTableGrid />
      )}
    </div>
  );
};

export default HomeSection;
