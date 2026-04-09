import { useButtonAction } from "../../../../hooks/useButtonAction";
import Button from "../../../ui/Button/Button";
import ListGridBtn from "../../../ui/Button/ListGridBtn";

const ButtonContainer = () => {
  const setButtonAction = useButtonAction((state) => state.setButtonAction);
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);

  function handleUploadedFile() {
    setButtonAction("uploaded");
    setIsModalOpen(true);
  }

  function handleCreateFolder() {
    setButtonAction("newFolder");
    setIsModalOpen(true);
  }

  function handleNameSortingFilter() {
    setButtonAction("nameSorting");
  }

  function handleFilter() {
    setButtonAction("filter");
  }

  return (
    <div className="min-w-[75.4vw] flex justify-between">
      <div className="flex gap-2 items-center">
        <ListGridBtn />
        <Button
          variant={"tertiary"}
          size={"sm"}
          iconPath="/icons/upDownIcon.svg"
          onClick={handleNameSortingFilter}
        >
          Name
        </Button>
        <Button
          variant={"tertiary"}
          iconPath="/icons/filterIcon.svg"
          iconPlace="front"
          className="px-4 py-1.5 gap-2 text-[12px]"
          onClick={handleFilter}
        >
          Filter
        </Button>
      </div>

      <div className="flex gap-2 items-center">
        <Button
          variant={"secondary"}
          size={"sm"}
          iconPath="/icons/plusIcon.svg"
          iconPlace="front"
          onClick={handleCreateFolder}
        >
          New Folder{" "}
        </Button>
        <Button
          size={"lg"}
          iconPath="/icons/uploadIcon.svg"
          iconPlace="front"
          onClick={handleUploadedFile}
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ButtonContainer;
