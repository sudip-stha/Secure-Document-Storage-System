import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex justify-center rounded-lg font-dmsans font-medium text-[16px] cursor-pointer",
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
      },
      size: {
        sm: "px-[12px] py-[6px] gap-2 text-[12px]",
        md: "px-[16px] py-[14px] gap-4",
        lg: "px-[28px] py-[6px] gap-1 text-[12px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
