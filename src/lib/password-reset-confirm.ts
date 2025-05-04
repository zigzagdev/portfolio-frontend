export type PasswordResetConfirmInput = {
    token: string;
    password: string;
    passwordConfirmation: string;
};

export async function requestPasswordResetConfirm(data: PasswordResetConfirmInput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Password reset confirmed with:", data);
            resolve({ message: "Password reset success" });
        }, 1000);
    });
}
