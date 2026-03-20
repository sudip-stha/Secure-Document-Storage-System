import Button from "../../../ui/Button/Button";

const ButtonContainer = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="bg-top-surface flex gap-3.25 p-0.5 rounded-sm">
          <div className="p-2 rounded-sm ">
            <img src="/public/icons/listIcon.svg" alt="" className="w-5" />
          </div>
          <div className="p-2 rounded-sm ">
            <img src="/public/icons/gridIcon.png" alt="" className="w-5" />
          </div>
        </div>
        <Button
          variant={"tertiary"}
          size={"sm"}
          iconPath="/icons/upDownIcon.svg"
        >
          Name
        </Button>
        <Button
          variant={"tertiary"}
          size={"sm"}
          iconPath="/icons/filterIcon.svg"
          iconPlace="front"
        >
          Filter
        </Button>
      </div>

      <div>
        <Button
          variant={"secondary"}
          size={"sm"}
          iconPath="/icons/plusIcon.svg"
          iconPlace="front"
        >
          New Folder{" "}
        </Button>
        <Button
          variant={"primary"}
          size={"sm"}
          iconPath="/icons/uploadIcon.svg"
          iconPlace="front"
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ButtonContainer;
