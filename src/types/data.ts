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

export interface requestDocumentDetailsType {
  requestDocumentDetails: DocumentTableListType | null | undefined;
  onClose: () => void;
}

export interface FileNameType {
  fileName: string;
}

export interface UseButtonActionType {
  buttonAction: string;
  isModalOpen: boolean;
  isListBtnActive: string;
  isRequestBtnActive: string;
  isRowHover: number | null;
  setButtonAction: (action: string) => void;
  setIsModalOpen: (action: boolean) => void;
  setIsListBtnActive: (activeValue: string) => void;
  setIsRequestBtnActive: (actionValue: string) => void;
  setIsRowHover: (id: number | null) => void;
}

export interface UseFilterActionType {
  filterAction: string;
  setFilterAction: (action: string) => void;
  openRowId: number | null;
  setOpenRowId: (id: number | null) => void;
}

export interface FilterHeaderBtnType {
  filterTypeValue: string;
}

export interface NameSortingItemType {
  sortingValue: string;
}

export interface ThreeDotListItemType extends IconPathType {
  listItem: string;
}

export interface HeadingType {
  value: string;
}

export interface RequestCardType {
  filename: string;
  fileIconPath: string;
  owner: string;
  message: string;
  status?: string;
}

export interface FilePreviewHeaderProps {
  fileName?: string;
  fileOwner?: string;
  startTimer: boolean;
  onExpire: () => void;
}

export interface CountDownTimerProps {
  startTimer: boolean;
  onExpire: () => void;
}
