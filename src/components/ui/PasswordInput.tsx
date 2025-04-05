import React, { useState } from 'react';
import { PasswordInputProps } from './PasswordInput.types';

const PasswordInput: React.FC<PasswordInputProps> = (
    {
        label,
        name,
        value,
        onChange,
        placeholder,
        error,
        required = false,

    }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
                    {label}{required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative">
                <input
                    id={name}
                    name={name}
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        error ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-2 text-sm text-gray-600"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default PasswordInput;
