import React from 'react';
import { ButtonProps } from './Button.types';
import Spinner from './Spinner';

const Button: React.FC<ButtonProps> = ({ loading, children, className = '', ...props }) => {
    return (
        <button
            disabled={loading || props.disabled}
            className={` ${className}`}
            {...props}
        >
            {loading && <Spinner size="sm" />}
            {children}
        </button>
    );
};

export default Button;
