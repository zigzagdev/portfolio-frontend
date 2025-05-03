export type PasswordResetRequestFormProps = {
    email: string;
    onEmailChange: (email: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading?: boolean;
    successMsg: string | null;
    errorMsg: string | null;
    loadingUI: React.ReactNode | null;
};