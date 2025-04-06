export type TextareaInputProps = {
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    placeholder?: string;
    rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
