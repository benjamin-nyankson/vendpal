import { StateCreator } from "zustand";

export interface SidebarSlice {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const createSidebarSlice: StateCreator<SidebarSlice> = (set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
});