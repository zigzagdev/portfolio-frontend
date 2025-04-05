export type TextInputProps = {
    label?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    error?: string;
    required?: boolean;
    className?: string;
};
