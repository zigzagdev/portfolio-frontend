export const logoutUser = async (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.removeItem('token');
            resolve();
        }, 500);
    });
};