import type { HeadingType } from "../../types/data";

const Heading3 = ({ value }: HeadingType) => {
  return (
    <h3 className="font-poppins font-bold text-[16px] text-warm-gray-200">
      {value}
    </h3>
  );
};

export default Heading3;
