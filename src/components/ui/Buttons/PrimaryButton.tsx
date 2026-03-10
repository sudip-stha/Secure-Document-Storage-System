const PrimaryButton = ({ value, iconPath }) => {
  return (
    <button className="bg-actionPrimaryColor px-[16px] py-[13px] text-white flex gap-[1rem] rounded-[8px] font-medium">
      {value} <img src={iconPath} alt="" className="w-[13px] " />
    </button>
  );
};

export default PrimaryButton;
