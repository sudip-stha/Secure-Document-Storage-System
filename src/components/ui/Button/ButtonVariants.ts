import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex gap-4 justify-center rounded-lg font-dmsans font-medium text-[16px] cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-action-primary text-white",
        secondary:
          "bg-authorisation-viewing-bg text-authorisation-viewing-border border border-authorisation-viewing-text",
      },
      size: {
        sm: "px-[16px] py-[14px]",
        md: "px-[28px] py-[8px]",
        lg: "",
      },
      defaultVariants: {
        type: "primary",
      },
    },
  },
);
