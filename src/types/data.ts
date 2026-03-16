import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

export interface BtnType {
  value: string;
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
