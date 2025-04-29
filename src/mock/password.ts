export const mockPasswordResetRequest = async (email: string): Promise<{ success: boolean }> => {
    console.log('mockPasswordResetRequest called with:', email);

    return new Promise((resolve) => {
        setTimeout(() => {
            if (email.includes('@')) {
                resolve({ success: true });
            } else {
                resolve({ success: false });
            }
        }, 1000);
    });
};