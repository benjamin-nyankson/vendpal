import React, { forwardRef } from "react";

export interface InputDivProps {
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  inputClass?: string;
  id: string;
  value?: string | number;
  onChange: (name: string, value: string | number) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClick?: () => void;
  disabled?: boolean;
  error?: string;
  min?: number | string;
  max?: number | string;
  autocomplete?: string;
  ariaLabel?: string;
  required?: boolean;
  pattern?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}

const InputField = forwardRef<HTMLDivElement, InputDivProps>(
  (
    {
      type = "text",
      label,
      placeholder = "",
      id,
      value,
      onChange,
      onBlur,
      onClick,
      disabled = false,
      error,
      min,
      max,
      autocomplete = "off",
      ariaLabel,
      required = false,
      pattern,
      ariaLabelledBy,
      ariaDescribedBy,
    },
    ref
  ) => {
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      onChange(e.target.name, e.target.value);
    };

    return (
      <div
        className={"flex flex-col gap-1 text-dark900"}
        ref={ref}
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "default" }}
      >
        {label && (
          <label className=" whitespace-nowrap" htmlFor={id}>
            {label}
          </label>
        )}
        {type === "textarea" ? (
          <textarea
            className="input border p-4 border-[#C0C9C0] focus:outline-0 rounded-xl !h-[150px]"
            id={id}
            name={id}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
          />
        ) : (
          <input
            className="input border p-4 border-[#C0C9C0] focus:outline-0 rounded-xl "
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            min={min}
            max={max}
            autoComplete={autocomplete}
            aria-label={ariaLabel}
            required={required}
            pattern={pattern}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
          />
        )}
        {error && <div className="text-error text-sm">{error}</div>}
      </div>
    );
  }
);


export default React.memo(InputField);
