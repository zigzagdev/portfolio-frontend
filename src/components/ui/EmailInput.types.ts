export type EmailInputProps = {
    label?: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string | undefined;
    required?: boolean;
    className?: string;
    value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
