import { useButtonAction } from "../../../../hooks/useButtonAction";
import Heading2 from "../../../ui/Heading2";
import CreateFolderModal from "../../../UserDashboard/modals/CreateFolderModal";
import DocumentUploadModal from "../../../UserDashboard/modals/DocumentUploadModal";
import FilterModal from "../../../UserDashboard/modals/filterModal";
import NameSortingModal from "../../../UserDashboard/modals/NameSortingModal";
import NotificationModal from "../../../UserDashboard/modals/notificationModal/NotificationModal";
import DocumentTableGrid from "../../../UserDashboard/section/DocumentTable/DocumentTableGrid";
import DocumentTableList from "../../../UserDashboard/section/DocumentTable/DocumentTableList";
import DocummentTableTitle from "../../../UserDashboard/section/DocumentTable/DocummentTableTitle";
import ButtonContainer from "../../../UserDashboard/section/home/ButtonContainer";

const Files = () => {
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

      {buttonAction === "notification" && (
        <div className="fixed inset-0 z-30" onClick={handleCloseModal}>
          <div className="fixed top-0 right-0 z-30">
            <NotificationModal />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 py-6.5">
        <Heading2 value="All  Files" />
        <span className="font-dmsans text-[16px] text-text-secondary">
          View all the available files on vault.{" "}
        </span>
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

export default Files;
