import type { ButtonProps } from "../../../types/data";
import cn from "../../../utils/cn";
import { buttonVariants } from "./ButtonVariants";

const Button = ({
  children,
  className,
  variant,
  size,
  iconPath,
  ...props
}: ButtonProps) => {
  console.log(props);

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      <img src={iconPath} alt="" className={`${iconPath ? "w-3.25" : " "}`} />
    </button>
  );
};

export default Button;
