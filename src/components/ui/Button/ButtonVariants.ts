import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex justify-center items-center rounded-lg font-dmsans font-medium text-[16px] cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-action-primary text-white",
        secondary:
          "bg-authorisation-viewing-bg text-blue-400 font-semibold border border-authorisation-viewing-border",
        tertiary: "bg-top-surface text-text-primary",
        quaternary: "bg-none text-blue-400",
        fileAction:
          "bg-authorisation-locked-border text-text-secondary text-[14px]",
        reactivate:
          "bg-warm-gray-800 text-text-secondary font-semibold text-[12px]",
        sucess: "bg-action-confirm text-white font-semibold text-[12px]",
        danger: "bg-action-destructive text-white font-semibold text-[12px]",
      },
      size: {
        sm: "px-[12px] py-[6px] gap-2 text-[12px]",
        md: "px-[16px] py-[14px] gap-4",
        lg: "px-[28px] py-[6px] gap-1 text-[12px]",
        xl: "px-[20px] py-[12px] text-[14px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
