import React from 'react';
import { TextInputProps } from './types/TextInput.types';

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            label,
            error,
            required,
            className = '',
            ...inputProps
        },
        ref) => (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                ref={ref}
                {...inputProps}
                className={`border p-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    )
);

export default TextInput;
