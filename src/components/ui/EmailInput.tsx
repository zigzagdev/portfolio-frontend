import React from 'react';
import { EmailInputProps } from './EmailInput.types';

const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
    ({ label, error, required, className = '', ...inputProps }, ref) => (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={inputProps.name} className="text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <input
                type="email"
                ref={ref}
                {...inputProps}
                className={`border p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    error ? 'border-red-500' : 'border-gray-300'
                } ${className}`}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    )
);

export default EmailInput;
