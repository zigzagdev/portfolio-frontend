import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (
    {
        children,
        onClick,
        type = 'button',
        disabled = false,
    }) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`mt-10 px-4 py-2 rounded-md font-medium text-white ${
            disabled ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        }`}
    >
        {children}
    </button>
);

export default Button;
