"use client";

import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export const Input = ({ label, error, registration, ...props }: InputProps) => (
  <div className="flex flex-col w-full gap-1">
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <input
      {...registration}
      {...props}
      className={` border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 
        ${error ? "border-red-500 focus:ring-0 focus:ring-red-500" : "border-gray-300"}
      `}
    />
    {error && <span className="text-sm text-red-500">{error}</span>}
  </div>
);
