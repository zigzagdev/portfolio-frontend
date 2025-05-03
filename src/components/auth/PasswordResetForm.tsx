import React from 'react';
import { PasswordResetProps } from "../../features/auth/password-reset/type";

const PasswordResetForm: React.FC<PasswordResetProps> = (
    {
        password,
        confirmPassword,
        onPasswordChange,
        onConfirmPasswordChange,
        onSubmit,
        loading = false,
        successMsg,
        errorMsg,
    }) => {
    return (
        <form onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
            <h2 className="text-xl font-semibold text-center">Reset your password</h2>

            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                New password
            </label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                placeholder="Enter new password"
                className="w-full border px-3 py-2 rounded"
                required
            />

            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm new password
            </label>
            <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => onConfirmPasswordChange(e.target.value)}
                placeholder="Confirm new password"
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
                {loading ? 'Resetting...' : 'Reset Password'}
            </button>
        </form>
    );
};

export default PasswordResetForm;
