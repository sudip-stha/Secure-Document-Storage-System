import { create } from "zustand";
import type { UseFilterActionType } from "../types/data";

export const useFilterAction = create<UseFilterActionType>((set) => ({
  filterAction: "",
  setFilterAction: (action: string) => set(() => ({ filterAction: action })),
}));
