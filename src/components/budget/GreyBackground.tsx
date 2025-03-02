import React from "react";

export default function GreyBackground({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {label && (
        <label htmlFor="" className="font-medium text-lg">
          {label}
        </label>
      )}
      <div className="bg-surface-container py-4 px-6 rounded-xl">
        {children}
      </div>
    </div>
  );
}
