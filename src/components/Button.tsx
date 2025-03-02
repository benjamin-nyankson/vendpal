import React, { memo } from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = memo(
  ({
    label = "Button",
    onClick,
    className = "",
    icon,
    type = "button",
    disabled = false,
    ariaLabel,
  }: ButtonProps) => {
    return (
      <button
        type={type}
        className={`p-5 w-full cursor-pointer border border-[#C0C9C0] text-[#252624] rounded-xl transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none ${className}`}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel || label}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        <span className="whitespace-nowrap">{label}</span>
      </button>
    );
  }
);

export default Button;
