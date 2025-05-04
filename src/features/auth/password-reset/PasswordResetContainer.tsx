import React, { useState } from 'react';
import { messages } from '../../../lib/messages';
import PasswordResetForm from '../../../components/auth/PasswordResetForm';
import { passwordResetSchema } from '../../../hooks/validation/password-reset';
import { requestPasswordResetConfirm } from '../../../lib/password-reset-confirm';
import { useNavigate } from "react-router-dom";

const PasswordResetConfirmContainer: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const token = new URLSearchParams(window.location.search).get('token') || '';
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');

        const result = passwordResetSchema.safeParse({
            password,
            passwordConfirmation: confirmPassword,
        });

        if (!result.success) {
            const firstError = result.error.errors[0]?.message || messages.error.reset.password.default;
            setErrorMsg(firstError);
            return;
        }

        setLoading(true);

        try {
            await requestPasswordResetConfirm({
                token,
                password,
                passwordConfirmation: confirmPassword,
            });

            setSuccessMsg(messages.success.reset.password.success);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err) {
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
