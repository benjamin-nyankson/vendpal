// store/useStore.ts
import { create } from "zustand";
import { createAlertSlice, AlertSlice } from "./slices/alertSlice";
import { SidebarSlice, createSidebarSlice } from "./slices/sidebarSlice";
import {DepartmentSlice,createDepartmentSlice} from "./slices/departmentSlice"

type StoreState = AlertSlice & SidebarSlice & DepartmentSlice;

export const useStore = create<StoreState>((...a) => ({
  ...createAlertSlice(...a),
  ...createSidebarSlice(...a),
  ...createDepartmentSlice(...a)
}));
