import React from 'react';
import { TextareaInputProps } from './TextareaInput.types';

const TextareaInput: React.FC<TextareaInputProps> = (
    {
        label,
        name,
        value,
        onChange,
        placeholder,
        error,
        required = false,
        rows = 4,
    }) => (
    <div className="mb-4">
        {label && (
            <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
                {label}{required && <span className="text-red-500 ml-1">*</span>}
            </label>
        )}
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={rows}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

export default TextareaInput;
