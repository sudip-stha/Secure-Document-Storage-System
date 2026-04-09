import { useForm } from "react-hook-form";
import Button from "../../ui/Button/Button";
import { useButtonAction } from "../../../hooks/useButtonAction";
import Heading1 from "../../ui/Heading1";

const CreateFolderModal = () => {
  const { register, handleSubmit } = useForm();

  const setButtonAction = useButtonAction((state) => state.setButtonAction);
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);

  function handleCloseModal() {
    setButtonAction("");
    setIsModalOpen(false);
  }

  function onSubmit() {}

  return (
    <div
      className="bg-overlay-surface flex flex-col gap-8 p-8 rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-0.5">
          <Heading1 value="Create a New Folder" />
          <p className="font-dmsans text-[14px] text-warm-gray-200">
            Create a new folder to organize your files
          </p>
        </div>
        <button className="cursor-pointer" onClick={handleCloseModal}>
          <img src="/icons/crossIcon.svg" alt="" className="w-3" />
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 items-end font-dmsans"
      >
        <div className="flex flex-col gap-3 text-[14px] text-text-secondary">
          <label htmlFor="email">Folder Name </label>
          <input
            type="folderName"
            {...register("folderName")}
            placeholder="Enter a Folder Name"
            required
            className="w-106 bg-overlay-surface border border-strong-border rounded-sm p-2 placeholder:text-text-tertiary"
            onInvalid={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity(
                "Please enter a folder name",
              )
            }
            onInput={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity("")
            }
          />
        </div>
        <Button className="font-semibold text-[12px] px-4.75 py-2">
          Create Folder
        </Button>
      </form>
    </div>
  );
};

export default CreateFolderModal;
