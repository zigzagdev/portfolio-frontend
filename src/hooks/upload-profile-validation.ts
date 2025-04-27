export const validateProfileImage = (file: File): string | null => {
    const validTypes = ['image/jpeg', 'image/png'];
    const maxSizeInBytes = 5 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
        return 'Only JPEG and PNG files are allowed.';
    }

    if (file.size > maxSizeInBytes) {
        return 'File size must be less than 5MB.';
    }

    return null;
};