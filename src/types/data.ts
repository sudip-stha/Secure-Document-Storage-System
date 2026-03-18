import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import type { buttonVariants } from "../components/ui/Button/ButtonVariants";

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  iconPath?: string;
}

export interface NextBtnType {
  next: () => void;
  back?: () => void;
}

export interface InputFieldType {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  error?: FieldError;
  iconPath: string;
}
