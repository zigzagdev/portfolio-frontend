// src/components/ui/TextInput.tsx

import React from 'react';
import { TextInputProps } from './TextInput.types';

const TextInput: React.FC<TextInputProps> = (
    {
        label,
        name,
        value,
        onChange,
        placeholder,
        type = 'text',
        error,
        required = false,
    }) => {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default TextInput;
