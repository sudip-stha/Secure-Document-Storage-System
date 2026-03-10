import type { PrimaryBtnType } from "../../../types/data";

const PrimaryButton = ({ value, iconPath }: PrimaryBtnType) => {
  return (
    <button className="bg-actionPrimaryColor px-[16px] py-[13px] text-white flex gap-[1rem] rounded-[8px] font-medium justify-center">
      {value}{" "}
      <img src={iconPath} alt="" className={`${iconPath ? "w-[13px]" : " "}`} />
    </button>
  );
};

export default PrimaryButton;
