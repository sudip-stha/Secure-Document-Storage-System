import type { ButtonProps } from "../../../types/data";
import cn from "../../../utils/cn";
import { buttonVariants } from "./ButtonVariants";

const Button = ({
  children,
  className,
  variant,
  size,
  iconPath,
  iconPlace,
  ...props
}: ButtonProps) => {
  if (iconPlace == "front") {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <img src={iconPath} alt="" className={`${iconPath ? "w-3.5" : " "}`} />
        {children}
      </button>
    );
  }
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      <img src={iconPath} alt="" className={`${iconPath ? "w-3.5" : " "}`} />
    </button>
  );
};

export default Button;
