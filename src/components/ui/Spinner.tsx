import React from 'react';
import clsx from 'clsx';

type SpinnerProps = {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-10 w-10',
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className }) => {
    return (
        <div
            className={clsx(
                'animate-spin rounded-full border-2 border-t-transparent border-gray-500',
                sizeMap[size],
                className
            )}
        />
    );
};

export default Spinner;