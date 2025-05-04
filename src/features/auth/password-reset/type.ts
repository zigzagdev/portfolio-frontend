import React from "react";

export type PasswordResetProps = {
    password: string;
    confirmPassword: string;
    onPasswordChange: (value: string) => void;
    onConfirmPasswordChange: (value: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading?: boolean;
    successMsg: string | null;
    errorMsg: string | null;
};
