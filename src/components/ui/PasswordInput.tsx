import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { PasswordInputProps } from './types/PasswordInput.types';

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    (
        {
            label,
            error,
            required = false,
            className = '',
            ...inputProps
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label htmlFor={inputProps.name} className="text-sm font-medium text-gray-700">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}
                <div className="relative">
                    <input
                        ref={ref}
                        {...inputProps}
                        type={showPassword ? 'text' : 'password'}
                        className={`w-full px-3 py-2 pr-10 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            error ? 'border-red-500' : 'border-gray-300'
                        } ${className}`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
                        tabIndex={-1}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
        );
    }
);

export default PasswordInput;
