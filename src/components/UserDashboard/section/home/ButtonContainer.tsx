import Button from "../../../ui/Button/Button";

const ButtonContainer = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="bg-top-surface flex gap-3.25 p-0.5 rounded-sm">
          <div className="p-2 rounded-sm ">
            <img src="/icons/listIcon.svg" alt="" className="w-2" />
          </div>
          <div className="p-2 rounded-sm ">
            <img src="/icons/gridIcon.png" alt="" className="w-2" />
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
          iconPath="/icons/filterIcon.svg"
          iconPlace="front"
          className="px-5 py-1.5 gap-2 text-[12px]"
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
          className=""
        >
          New Folder{" "}
        </Button>
        <Button
          variant={"primary"}
          size={"lg"}
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
