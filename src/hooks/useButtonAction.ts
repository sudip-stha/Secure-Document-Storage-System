import { create } from "zustand";
import type { UseButtonActionType } from "../types/data";

export const useButtonAction = create<UseButtonActionType>((set) => ({
  buttonAction: "",
  isModalOpen: false,
  isListBtnActive: "list",
  isRowHover: null,
  setButtonAction: (action: string) => set(() => ({ buttonAction: action })),
  setIsModalOpen: (action: boolean) => set(() => ({ isModalOpen: action })),
  setIsListBtnActive: (activeValue: string) =>
    set(() => ({ isListBtnActive: activeValue })),
  setIsRowHover: (id: number | null) => set(() => ({ isRowHover: id })),
}));
