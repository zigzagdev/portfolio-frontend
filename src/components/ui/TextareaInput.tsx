import React from 'react';
import { TextareaInputProps } from './TextareaInput.types';

const TextareaInput = React.forwardRef<HTMLTextAreaElement, TextareaInputProps>(
    (
        {
            label,
            error,
            required = false,
            rows = 4,
            className = '',
            ...props
        },
        ref
    ) => (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={props.name} className="text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <textarea
                ref={ref}
                rows={rows}
                {...props}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    error ? 'border-red-500' : 'border-gray-300'
                } ${className}`}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    )
);

export default TextareaInput;
