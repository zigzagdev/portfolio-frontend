export type TextareaInputProps = {
    label?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    error?: string;
    required?: boolean;
    rows?: number;
    className?: string;
};
