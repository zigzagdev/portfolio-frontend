import React from 'react';
import { SelectInputProps } from './SelectInput.types';

const SelectInput: React.FC<SelectInputProps> = (
    {
        label,
        name,
        value,
        onChange,
        options,
        error,
        required = false,
    }) => (
    <div className="mb-4">
        {label && (
            <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
                {label}{required && <span className="text-red-500 ml-1">*</span>}
            </label>
        )}
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error ? 'border-red-500' : 'border-gray-300'
            }`}
        >
            <option value="">Select an option</option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

export default SelectInput;
