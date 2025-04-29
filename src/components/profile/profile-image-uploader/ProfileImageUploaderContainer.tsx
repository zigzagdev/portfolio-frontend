import React, { useState, useEffect } from 'react';
import ProfileImageUploader from './ProfileImageUploader';
import { UserProfile } from '../../../lib/user-profile';
import { validateProfileImage } from '../../../hooks/upload-profile-validation';
import { uploadProfileImageMock } from '../../../mock/upload-profile-image';
import { messages } from "../../../lib/messages";

type Props = {
    userProfile: UserProfile;
};

const ProfileImageUploaderContainer: React.FC<Props> = ({ userProfile }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    useEffect(() => {
        if (uploadedImageUrl) {
            setPreviewUrl(uploadedImageUrl);
        }
    }, [uploadedImageUrl]);

    const handleUpload = async (file: File) => {
        try {
            const { profileImage } = await uploadProfileImageMock(file);
            if (!profileImage) throw new Error(messages.error.upload.default);

            setUploadedImageUrl(profileImage);
            setSuccessMsg(messages.success.upload.success);
            setErrorMsg(null);
        } catch (error) {
            setErrorMsg(messages.error.upload.default);
            setSuccessMsg(null);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validationError = validateProfileImage(file);
        if (validationError) {
            setErrorMsg(validationError);
            setSuccessMsg(null);
            setPreviewUrl(null);
            setUploadedImageUrl(null);
            return;
        }

        setErrorMsg(null);
        setSuccessMsg(null);

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        const newPreviewUrl = URL.createObjectURL(file);
        setPreviewUrl(newPreviewUrl);

        handleUpload(file);
    };

    return (
        <ProfileImageUploader
            user={userProfile}
            previewUrl={previewUrl}
            uploadedImageUrl={uploadedImageUrl}
            onFileChange={handleFileChange}
            errorMsg={errorMsg}
            successMsg={successMsg}
        />
    );
};

export default ProfileImageUploaderContainer;
