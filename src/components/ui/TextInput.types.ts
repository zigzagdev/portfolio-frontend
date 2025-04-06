export type TextInputProps = {
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
} & React.InputHTMLAttributes<HTMLInputElement>;