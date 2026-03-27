import ThreeDotListItem from "../../ui/ThreeDotListItem";

const ThreeDotModal = () => {
  return (
    <div
      className="max-w-66 bg-top-surface py-6 border border-default-border rounded-xl font-dmsans text-[16px] text-white"
      onClick={(e) => e.stopPropagation()}
    >
      <h6 className="font-semibold border-b-2 border-warm-gray-600 tracking-wider px-6 pb-3">
        Contact List File.pdf
      </h6>
      <ul className="flex flex-col gap-3 px-6 pt-3">
        <ThreeDotListItem listItem="Open" iconPath="/icons/openIcon.svg" />
        <ThreeDotListItem listItem="Rename" iconPath="/icons/renameIcon.svg" />
        <ThreeDotListItem listItem="Move" iconPath="/icons/moveIcon.svg" />
        <ThreeDotListItem
          listItem="Download"
          iconPath="/icons/downloadIcon.svg"
        />
        <ThreeDotListItem
          listItem="View Access Requests"
          iconPath="/icons/viewAccessRequestIcon.svg"
        />
        <ThreeDotListItem listItem="Delete" iconPath="/icons/deleteIcon.svg" />
      </ul>
    </div>
  );
};

export default ThreeDotModal;
