"use client";

import { UseFormRegisterReturn } from "react-hook-form";

interface RadioGroupProps {
  label?: string;
  options: { label: string; value: string }[];
  registration?: UseFormRegisterReturn;
  error?: string;
}

export const RadioGroup = ({ label, options, registration, error }: RadioGroupProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border transition
              ${error ? "border-red-400" : "border-gray-300 hover:border-blue-500"}
            `}
          >
            <input
              type="radio"
              value={option.value}
              {...registration}
              className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
            />
            <span className="text-gray-700 text-sm">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
