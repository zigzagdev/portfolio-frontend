import React, { useState } from 'react';
import ProfileImageUploader from './ProfileImageUploader';
import { UserProfile } from '../../../lib/user-profile';
import { validateProfileImage } from '../../../hooks/upload-profile-validation';
import { uploadProfileImageMock } from '../../../lib/upload-profile-image';

type Props = {
    userProfile: UserProfile;
};

const ProfileImageUploaderContainer: React.FC<Props> = ({ userProfile }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleUpload = async (file: File) => {
        try {
            const { imageUrl } = await uploadProfileImageMock(file);
            setUploadedImageUrl(imageUrl);
        } catch (error) {
            console.error('Upload failed', error);
            setErrorMsg('Failed to upload profile image.');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const error = validateProfileImage(file);
        if (error) {
            setErrorMsg(error);
            setPreviewUrl(null);
            return;
        }
        setErrorMsg(null);

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        handleUpload(file);
    };

    return (
        <ProfileImageUploader
            user={userProfile}
            previewUrl={uploadedImageUrl ?? previewUrl ?? null}
            onFileChange={handleFileChange}
            errorMsg={errorMsg}
        />
    );
};

export default ProfileImageUploaderContainer;
