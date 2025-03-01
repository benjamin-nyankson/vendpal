// slices/alertSlice.ts
import { StateCreator } from "zustand";

export type Severity = "error" | "success" | "info";

export interface AlertSlice {
  message: string;
  open: boolean;
  severity: Severity;
  setAlert: (alert: [string, Severity]) => void;
  closeAlert:()=>void
}

export const createAlertSlice: StateCreator<AlertSlice> = (set) => ({
  message: "",
  open: false,
  severity: "info",
  setAlert: ([message, severity]) =>
    set({
      open: true,
      message: message.length > 100 ? "Contact for support" : message,
      severity,
    }),
    closeAlert:()=>set({open:false})
});
