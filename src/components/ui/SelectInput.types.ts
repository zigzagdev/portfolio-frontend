export type SelectInputProps = {
    label?: string;
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { label: string; value: string }[];
    error?: string | undefined;
    required?: boolean;
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
