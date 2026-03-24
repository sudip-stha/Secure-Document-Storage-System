
import Button from "../Button/Button";
import InputField from "../InputField";

const CreateFolderModal = () => {
  return (
    <div className="bg-overlay-surface flex flex-col gap-8 p-8 rounded-xl">
      <div className="flex flex-col gap-0.5">
        <h1 className="font-poppins font-bold text-[24px] text-text-primary">
          Create a New Folder
        </h1>
        <p className="font-dmsans text-[14px] text-warm-gray-200">
          Create a new folder to organize your files
        </p>
      </div>
      <div>
        <label htmlFor="">Folder Name</label>
        <InputField />
      </div>

      <Button variant={"primary"} size={"md"}>
        Browse Files
      </Button>
    </div>
  );
};

export default CreateFolderModal;
