import React from 'react';
import { TextareaInputProps } from './types/TextareaInput.types';

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
        <div className="flex flex-col gap-2 w-full max-w-xl">
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
                className={`resize-none w-full px-4 py-2 border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    error ? 'border-red-500' : 'border-gray-300'
                } ${className}`}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    )
);

export default TextareaInput;
