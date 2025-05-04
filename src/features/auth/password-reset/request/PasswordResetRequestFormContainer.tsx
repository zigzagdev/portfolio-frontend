import React, { useState } from 'react';
import Spinner from '../../../../components/ui/Spinner';
import { passwordResetRequestSchema } from '../../../../hooks/validation/password-reset-form';
import { PasswordResetRequestFormProps } from './type';
import EmailInput from '../../../../components/ui/EmailInput';

const PasswordResetRequestFormContainer: React.FC<PasswordResetRequestFormProps> = (
    {
        email,
        onEmailChange,
        onSubmit,
        loading = false,
        successMsg,
        errorMsg,
        loadingUI,
    }) => {
    const [validationError, setValidationError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidationError(null);

        const result = passwordResetRequestSchema.safeParse({ email });

        if (!result.success) {
            const firstError = result.error.errors[0]?.message;
            setValidationError(firstError || 'Invalid input');
            return;
        }

        onSubmit(e);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4"
        >
            <h2 className="text-xl font-semibold text-center">Forgot your password?</h2>

            <EmailInput
                name="email"
                label="Email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                error={(validationError || errorMsg) || undefined}
                required
            />

            {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
                disabled={loading}
            >
                {loading
                    ? loadingUI || (
                    <div className="flex items-center justify-center gap-2">
                        <Spinner size="sm"/>
                        Sending...
                    </div>
                )
                    : 'Send reset email'}
            </button>
        </form>
    );
};

export default PasswordResetRequestFormContainer;
