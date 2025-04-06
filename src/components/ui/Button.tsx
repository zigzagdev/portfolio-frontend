import React from 'react';
import { ButtonProps } from './Button.types';
import Spinner from './Spinner';

const Button: React.FC<ButtonProps> = ({ loading, children, ...props }) => {
    return (
        <button
            disabled={loading || props.disabled}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-blue-600 text-white mt-20"
            {...props}
        >
            {loading && <Spinner size="sm" />}
            {children}
        </button>
    );
};

export default Button;
