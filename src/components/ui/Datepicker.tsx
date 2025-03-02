import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";

interface DatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  dateFormat?: string;
  label?: string;
  labelPosition?: "top" | "left"; // Label positioning
}

// Custom button for the DatePicker
const CustomInput = forwardRef<
  HTMLButtonElement,
  { value?: string; onClick?: () => void }
>(({ value, onClick }, ref) => (
  <button
    className="bg-transparent text-neutral15 font-medium cursor-pointer outline-none flex items-center gap-2 justify-center mt-2"
    onClick={onClick}
    ref={ref}
  >
    <CalendarDateRangeIcon className="w-6 h-6 text-neutral15" />
    {value}
  </button>
));

CustomInput.displayName = "CustomInput";

const DatePickerComponent: React.FC<DatePickerProps> = ({
  selectedDate,
  setSelectedDate,
  dateFormat = "dd MMMM, yy",
  label = "Select Date",
  labelPosition = "top",
}) => {
  return (
    <div
      className={`flex ${
        labelPosition === "left" ? "items-center gap-3" : "flex-col gap-2"
      } w-fit`}
    >
      <label className="text-neutral15 font-medium">{label}</label>
      <div className="flex items-center space-x-2 justify-center bg-surface-container p-2 rounded-md shadow-sm cursor-pointer w-fit">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat={dateFormat}
          customInput={<CustomInput />}
        />
      </div>
    </div>
  );
};

export default React.memo(DatePickerComponent);
