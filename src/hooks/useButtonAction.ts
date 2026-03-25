import { create } from "zustand";
import type { UseButtonActionType } from "../types/data";

export const useButtonAction = create<UseButtonActionType>((set) => ({
  buttonAction: "",
  isModalOpen: false,
  setButtonAction: (action: string) => set(() => ({ buttonAction: action })),
  setIsModalOpen: (action: boolean) => set(() => ({ isModalOpen: action })),
}));
