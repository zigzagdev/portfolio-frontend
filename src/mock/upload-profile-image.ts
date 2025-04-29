export const uploadProfileImageMock = async (file: File): Promise<{ profileImage: string }> => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve({ profileImage: reader.result as string });
        };
        reader.readAsDataURL(file);
    });
};