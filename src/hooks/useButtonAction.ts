import { create } from "zustand";

export const useButtonAction = create((set) => ({
  buttonAction: "",
  isModalOpen: false,
  uploadedFileModal: () => set(() => ({ buttonAction: "uploaded" })),
  newFolderModal: () => set(() => ({ buttonAction: "newFolder" })),
  filterModal: () => set(() => ({ buttonAction: "filter" })),
  setIsModalopen: () => set(() => ({ isModalOpen: true })),
}));
