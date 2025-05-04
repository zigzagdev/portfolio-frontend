export type PasswordResetRequestInput = {
    email: string;
};

export async function requestPasswordReset(data: PasswordResetRequestInput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('📦 Mock password reset requested for:', data);
            resolve({ message: 'Mock password reset email sent' });
        }, 1000);
    });
}
