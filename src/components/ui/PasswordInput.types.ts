export type PasswordInputProps = {
    label?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
    required?: boolean;
    className?: string;
};
