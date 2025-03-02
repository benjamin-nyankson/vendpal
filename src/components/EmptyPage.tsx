import React from "react";

interface EmptyPageProps {
  message?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ message = "Nothing to display" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mb-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 9h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default EmptyPage;
