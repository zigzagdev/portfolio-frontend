export const uploadProfileImageMock = async (file: File): Promise<{ profileImage: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newImageUrl = URL.createObjectURL(file);
    return {
        profileImage: newImageUrl,
    };
};