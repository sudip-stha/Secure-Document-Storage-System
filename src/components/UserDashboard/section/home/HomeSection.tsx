import DocummentTableTitle from "../../../ui/DocumentTable/DocummentTableTitle";
import ButtonContainer from "./ButtonContainer";

const HomeSection = () => {
  return (
    <div className="flex flex-col gap-5 px-10 ">
      <div className="flex gap-2.25 py-6.5">
        <img src={"/icons/documentHomeIcon.svg"} alt="" />
        <img src={"/icons/greaterIcon.svg"} alt="" />
        <h2 className="text-text-primary">Documents</h2>
      </div>

      <ButtonContainer />
      <DocummentTableTitle />
    </div>
  );
};

export default HomeSection;
