import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type {
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";
import type { buttonVariants } from "../components/ui/Button/ButtonVariants";
import React from "react";

export interface IconPathType {
  iconPath?: string;
}

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    IconPathType {
  children: ReactNode;
  iconPlace?: string;
}

export interface NextBtnType {
  next: () => void;
  back?: () => void;
}

export interface InputFieldType<T extends FieldValues>
  extends IconPathType, React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  type: string;
  register: UseFormRegister<T>;
  placeholder: string;
  error?: FieldError;
}

export interface NavItemType extends IconPathType {
  value: string;
  URL: string;
}

export interface DocumentTableListType {
  id: number;
  name: string;
  status: string;
  type: string;
  size: number;
  modified: number;
  owner: string;
}

export interface FileNameType {
  fileName: string;
}

export interface UseButtonActionType {
  buttonAction: string;
  isModalOpen: boolean;
  isListBtnActive: string;
  setButtonAction: (action: string) => void;
  setIsModalOpen: (action: boolean) => void;
  setIsListBtnActive: (activeValue: string) => void;
}
