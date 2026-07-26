import { twMerge } from "tailwind-merge";
import type { HeadingType } from "../../types/data";
import clsx from "clsx";

const Heading2 = ({ value, className }: HeadingType) => {
  return (
    //className={twMerge(clsx(defaultClasses, conditionalClasses, className))}
    <h2
      className={twMerge(
        clsx("font-poppins font-bold text-[20px] text-text-primary", className),
      )}
    >
      {value}
    </h2>
  );
};

export default Heading2;
