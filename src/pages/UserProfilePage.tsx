import React, { useState } from 'react';
import ProfileImageUploader from '../components/profile/profile-image-uploader/ProfileImageUploader';
import Spinner from "../components/ui/Spinner";
import { messages } from "../lib/messages";
import { ErrorMessage } from "../components/ui/ErrorMessage";
import NotFound from "./NotFound";
import { useAuth } from "../context/AuthContext";

const UserProfilePage: React.FC = () => {
    const { user, setUser, loading } = useAuth();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !user) return;

        const newPreviewUrl = URL.createObjectURL(file);
        setPreviewUrl(newPreviewUrl);
        setSuccessMsg(null);
        setErrorMsg(null);

        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                const newImage = reader.result;

                setUploadedImageUrl(newImage);
                setSuccessMsg(messages.success.upload.success);

                setUser(prev => prev ? { ...prev, profileImage: newImage } : prev);
            }
        };
        reader.readAsDataURL(file);
    };

    if (loading) return <Spinner size="lg" className="mx-auto mt-20" />;
    if (errorMsg) return <ErrorMessage message={errorMsg} />;
    if (!user) return <NotFound />;

    return (
        <main className="bg-gray-100 min-h-screen py-10 px-4">
            <ProfileImageUploader
                user={user}
                previewUrl={previewUrl}
                uploadedImageUrl={uploadedImageUrl}
                onFileChange={handleFileChange}
                errorMsg={errorMsg}
                successMsg={successMsg}
            />
        </main>
    );
};

export default UserProfilePage;
