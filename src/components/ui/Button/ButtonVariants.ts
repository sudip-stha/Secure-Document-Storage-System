import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex justify-center rounded-lg font-dmsans font-medium text-[16px] cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-action-primary text-white",
        secondary:
          "bg-authorisation-viewing-bg text-authorisation-viewing-border border border-authorisation-viewing-text",
        tertiary: "bg-top-surface text-text-primary",
      },
      size: {
        sm: "px-[12px] py-[6px] gap-2",
        md: "px-[16px] py-[14px] gap-4",
        lg: "px-[28px] py-[8px]",
      },
      defaultVariants: {
        type: "primary",
      },
    },
  },
);
