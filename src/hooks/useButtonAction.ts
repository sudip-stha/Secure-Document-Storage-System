import { create } from "zustand";
import type { UseButtonActionType } from "../types/data";

export const useButtonAction = create<UseButtonActionType>((set) => ({
  buttonAction: "",
  isModalOpen: false,
  isListBtnActive: "list",
  isRequestBtnActive:"incomming",
  isRowHover: null,
  setButtonAction: (action: string) => set(() => ({ buttonAction: action })),
  setIsModalOpen: (action: boolean) => set(() => ({ isModalOpen: action })),
  setIsListBtnActive: (activeValue: string) =>
    set(() => ({ isListBtnActive: activeValue })),
  setIsRequestBtnActive:(actionValue:string)=>set(()=>({isRequestBtnActive:actionValue})),
  setIsRowHover: (id: number | null) => set(() => ({ isRowHover: id })),
}));
