import { StateCreator } from "zustand";

export interface SidebarSlice {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSideBar:(open:boolean)=>void
}

export const createSidebarSlice: StateCreator<SidebarSlice> = (set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSideBar:(open)=>set(()=>({isSidebarOpen:open}))
});