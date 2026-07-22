import type { HeadingType } from "../../types/data";

const Heading2 = ({ value }: HeadingType) => {
  return (
    <h2 className="font-poppins font-bold text-[20px] text-text-primary">
      {value}
    </h2>
  );
};

export default Heading2;
