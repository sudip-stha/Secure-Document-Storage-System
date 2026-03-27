import { create } from "zustand";
import type { UseFilterActionType } from "../types/data";

export const useFilterAction = create<UseFilterActionType>((set) => ({
  filterAction: "",
  openRowId: null,
  setFilterAction: (action: string) => set(() => ({ filterAction: action })),
  setOpenRowId: (id: number | null) => set(() => ({ openRowId: id })),
}));
