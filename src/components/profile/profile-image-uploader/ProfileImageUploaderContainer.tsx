import React, { useState } from 'react';
import ProfileImageUploader from './ProfileImageUploader';
import { UserProfile } from './ProfileImageUploader.types';
import { validateProfileImage } from "../../../hooks/upload-profile-validation";

type Props = {
    user: UserProfile;
};

const ProfileImageUploaderContainer: React.FC<Props> = ({ user }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
    };

    return (
        <ProfileImageUploader
            user={user}
            previewUrl={previewUrl}
            onFileChange={handleFileChange}
            errorMsg={errorMsg}
        />
    );
};

export default ProfileImageUploaderContainer;
