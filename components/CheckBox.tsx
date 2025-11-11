"use client";

import { UseFormRegisterReturn } from "react-hook-form";

interface CheckboxGroupProps {
  label?: string;
  options: { label: string; value: string }[];
  registration?: UseFormRegisterReturn;
  error?: string;
}

export const CheckboxGroup = ({ label, options, registration, error }: CheckboxGroupProps) => {
  const name = registration?.name;

  return (
    <div className="flex flex-col w-full gap-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center gap-3 cursor-pointer px-4 py-2 rounded-xl border transition-all
              has-[:checked]:bg-blue-100 has-[:checked]:border-blue-500 has-[:checked]:text-blue-700
              ${error ? "border-red-400" : "border-gray-300 hover:border-blue-400"}
            `}
          >
            <input
              type="checkbox"
              name={name}
              value={option.value}
              {...registration}
              className="peer appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer relative"
            />
            <span className="text-sm font-medium">{option.label}</span>
          </label>
        ))}
      </div>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
