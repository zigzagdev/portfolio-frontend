export const logoutUser = async (): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = false;
            if (shouldFail) {
                reject(new Error('Logout failed (mock error)'));
            } else {
                localStorage.removeItem('token');
                resolve();
            }
        }, 500);
    });
};