import React, { useState } from 'react';
import Spinner from '../ui/Spinner';
import { passwordResetRequestSchema } from '../../hooks/validation/password-reset-form';
import { requestPasswordReset } from "../../lib/password-reset-request";
import PasswordResetRequestFormContainer from '../../features/auth/password-reset/request/PasswordResetRequestFormContainer';

const PasswordResetRequestForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidationError(null);
        setErrorMsg(null);
        setSuccessMsg(null);

        const result = passwordResetRequestSchema.safeParse({ email });

        if (!result.success) {
            const firstError = result.error.errors[0]?.message;
            setValidationError(firstError || 'Invalid input');
            return;
        }

        try {
            setLoading(true);
            const res = await requestPasswordReset({ email });
            console.log(res);
            setSuccessMsg('If the email is registered, a password reset link has been sent.');
        } catch (err) {
            setErrorMsg('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PasswordResetRequestFormContainer
            email={email}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
            loading={loading}
            successMsg={successMsg}
            errorMsg={validationError || errorMsg}
            loadingUI={
                <div className="flex items-center justify-center gap-2">
                    <Spinner size="sm" />
                    Sending...
                </div>
            }
        />
    );
};

export default PasswordResetRequestForm;