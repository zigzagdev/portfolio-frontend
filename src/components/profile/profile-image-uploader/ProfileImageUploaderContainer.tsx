import React, { useState } from 'react';
import ProfileImageUploader from './ProfileImageUploader';
import { UserProfile } from './ProfileImageUploader.types';

type Props = {
    user: UserProfile;
};

const ProfileImageUploaderContainer: React.FC<Props> = ({ user }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    };

    return (
        <ProfileImageUploader
            user={user}
            previewUrl={previewUrl}
            onFileChange={handleFileChange}
        />
    );
};

export default ProfileImageUploaderContainer;
