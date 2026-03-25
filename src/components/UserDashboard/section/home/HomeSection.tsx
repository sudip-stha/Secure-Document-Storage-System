import { useButtonAction } from "../../../../hooks/useButtonAction";
import DocumentTableGrid from "../../../ui/DocumentTable/DocumentTableGrid";
import DocumentTableList from "../../../ui/DocumentTable/DocumentTableList";
import DocummentTableTitle from "../../../ui/DocumentTable/DocummentTableTitle";
import CreateFolderModal from "../../../ui/modals/CreateFolderModal";
import DocumentUploadModal from "../../../ui/modals/DocumentUploadModal";
import FilterModal from "../../../ui/modals/filterModal";
import NameSortingModal from "../../../ui/modals/NameSortingModal";

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
        <div
          className="fixed top-51.25 left-95 z-30"
          onClick={handleCloseModal}
        >
          <NameSortingModal />
        </div>
      )}

      {buttonAction === "filter" && (
        <div className="fixed top-51.25 left-118 z-30">
          <FilterModal />
        </div>
      )}

      <div className="flex gap-2.25 py-6.5">
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
