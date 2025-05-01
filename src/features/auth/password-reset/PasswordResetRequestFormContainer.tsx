import React from 'react';
import Spinner from '../../../components/ui/Spinner';

type Props = {
    email: string;
    onEmailChange: (email: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading?: boolean;
    successMsg: string | null;
    errorMsg: string | null;
};

const PasswordResetRequestFormContainer: React.FC<Props> =
    ({
         email,
         onEmailChange,
         onSubmit,
         loading = false,
         successMsg,
         errorMsg,
     }) => {
        return (
            <form onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
                <h2 className="text-xl font-semibold text-center">Forgot your password?</h2>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => onEmailChange(e.target.value)}
                    placeholder="Email address"
                    className="w-full border px-3 py-2 rounded"
                    required
                />

                {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
                {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <Spinner size="sm" /> Sending...
                        </div>
                    ) : (
                        'Send reset email'
                    )}
                </button>
            </form>
        );
    };

export default PasswordResetRequestFormContainer;
