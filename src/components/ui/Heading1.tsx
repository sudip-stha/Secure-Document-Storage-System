import type { HeadingType } from "../../types/data";

const Heading1 = ({ value }: HeadingType) => {
  return (
    <h1 className="font-poppins font-bold text-[24px] text-text-primary">
      {value}
    </h1>
  );
};

export default Heading1;
