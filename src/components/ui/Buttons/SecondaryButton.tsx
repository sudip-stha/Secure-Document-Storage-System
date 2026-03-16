import type { BtnType } from "../../../types/data";

const SecondaryButton = ({ value }: BtnType) => {
  return (
    <button className="bg-actionPrimaryColor px-4 py-3 text-white flex gap-4 rounded-lg font-medium justify-center">
      {value}
    </button>
  );
};

export default SecondaryButton;
