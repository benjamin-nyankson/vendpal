import { StateCreator } from "zustand";

export interface Department {
  id: number;
  bgColor: {
    container: string;
    main: string;
  };
  body: string;
  title: string;
}

export interface DepartmentSlice {
  departments: Department[];
  addDepartment: (newDepartment: Department) => void;
  setDepartments: (newDepartments: Department[]) => void;
}

export const createDepartmentSlice: StateCreator<DepartmentSlice> = (set) => ({
  departments: [],
  addDepartment: (newDepartment) => {
    set((state) => ({
      departments: [...state.departments, newDepartment],
    }));
  },
  setDepartments: (departments) => {
    set(() => ({ departments }));
  },
});