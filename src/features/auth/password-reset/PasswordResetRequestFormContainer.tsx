import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PasswordResetForm from '../../../components/auth/PasswordResetRequestForm';
import {messages} from "../../../lib/messages";
import emailInput from "../../../components/ui/EmailInput";

const PasswordResetRequestFormContainer: React.FC = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const [email, setEmail] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg(null);
        setSuccessMsg(null);

        if (!token) {
            setErrorMsg(messages.error.token.null);
            return;
        }

        setLoading(true);
        const res = { success: true };
        setLoading(false);

        if (res.success) {
            setSuccessMsg('Password reset successful. Redirecting...');
            setTimeout(() => navigate('/login'), 2000);
        } else {
            setErrorMsg('Password reset failed. Please try again.');
        }
    };

    return (
        <PasswordResetForm
            email={emailInput}
            onEmailChange={(setEmail) => setEmail}
            onSubmit={handleSubmit}
            loading={loading}
            errorMsg={errorMsg}
            successMsg={successMsg}
        />
    );
};

export default PasswordResetRequestFormContainer;