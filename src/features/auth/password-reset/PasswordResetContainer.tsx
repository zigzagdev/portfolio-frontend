import React, { useState } from 'react';
import { messages } from '../../../lib/messages';
import PasswordResetForm from '../../../components/auth/PasswordResetForm';
import { passwordResetSchema } from '../../../hooks/validation/password-reset';

const PasswordResetConfirmContainer: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');

        const result = passwordResetSchema.safeParse({ password, confirmPassword });

        if (!result.success) {
            const firstError = result.error.errors[0]?.message || messages.error.reset.password.default;
            setErrorMsg(firstError);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/password-reset-confirm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) throw new Error();

            setSuccessMsg(messages.success.reset.password.success);
        } catch {
            setErrorMsg(messages.error.reset.password.default);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PasswordResetForm
            password={password}
            confirmPassword={confirmPassword}
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
            onSubmit={handleSubmit}
            loading={loading}
            successMsg={successMsg}
            errorMsg={errorMsg}
        />
    );
};

export default PasswordResetConfirmContainer;
