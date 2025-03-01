import { useEffect, useState } from "react";
import {
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useStore } from "../../store/useStore";

const Alert = () => {
//   const { severity, message, open, closeAlert } = useAlertStore();
  const [progressWidth, setProgressWidth] = useState(100);
  const progressDuration = 30000; // 30 seconds
const {message,open, severity,closeAlert} = useStore()
  useEffect(() => {
    if (open) {
      setProgressWidth(100);
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const newWidth = Math.max(
          0,
          100 - (elapsedTime / progressDuration) * 100
        );
        setProgressWidth(newWidth);
        if (newWidth === 0) {
          clearInterval(interval);
          closeAlert();
        }
      }, 100);

      setTimeout(() => closeAlert(), progressDuration);
      return () => clearInterval(interval);
    }
  }, [closeAlert, open]);

  if (!open) return null;

  const bgColor =
    severity === "error"
      ? "bg-red-100 border-red-500"
      : severity === "success"
      ? "bg-green-100 border-green-500"
      : "bg-gray-100 border-gray-500";

  const textColor =
    severity === "error"
      ? "text-red-600"
      : severity === "success"
      ? "text-green-600"
      : "text-gray-600";

  const Icon =
    severity === "error"
      ? XCircleIcon
      : severity === "success"
      ? CheckCircleIcon
      : InformationCircleIcon;

  return (
    <div
      className={`fixed top-10 right-10 z-50 w-1/5 p-3 rounded-lg border ${bgColor}`}
    >
      <div className="flex justify-between items-center">
        <div className={`flex items-center ${textColor}`}>
          <Icon className="w-5 h-5 mr-2" />
          <p className={`capitalize font-medium ${textColor}`}>{severity}</p>
        </div>
        <button onClick={closeAlert}>
          <XMarkIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <p className="text-gray-700 mt-2">{message}</p>
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1 mt-2">
        <div
          className={`h-full ${
            severity === "error"
              ? "bg-red-600"
              : severity === "success"
              ? "bg-green-600"
              : "bg-gray-600"
          } `}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Alert;
