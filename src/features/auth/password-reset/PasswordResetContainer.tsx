import React, { useState } from 'react';
import PasswordResetRequestFormContainer from './PasswordResetRequestFormContainer';
import {messages} from "../../../lib/messages";
import Spinner from "../../../components/ui/Spinner";

const PasswordResetContainer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingUI, setLoadingUI] = useState<React.ReactNode>(null);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg('');
        setErrorMsg('');

        try {
            const response = await fetch('/api/password-reset-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error('Failed to send reset email');

            setSuccessMsg(messages.success.reset.email.success);
        } catch (err) {
            setErrorMsg(messages.error.reset.email.default);
        } finally {
            setLoadingUI(
                <div className="flex items-center gap-2">
                    <Spinner size="sm" />
                    <span>{messages.success.reset.email.progress}</span>
                </div>
            );
        }
    };

    return (
        <PasswordResetRequestFormContainer
            email={email}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
            loading={loading}
            successMsg={successMsg}
            errorMsg={errorMsg}
            loadingUI={loadingUI}
        />
    );
};

export default PasswordResetContainer;
