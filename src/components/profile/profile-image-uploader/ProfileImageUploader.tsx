import React from 'react';
import { ProfileImageUploaderProps } from './ProfileImageUploader.types';

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({
    user,
    uploadedImageUrl,
    previewUrl,
    onFileChange,
    errorMsg,
    successMsg,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto">
            <div className="flex flex-col items-center gap-4">
                <img
                    src={uploadedImageUrl ?? previewUrl ?? user.profileImage}
                    alt="Avatar"
                    className="w-24 h-24 rounded-full object-cover border border-gray-300"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                    {user.firstName} {user.lastName}
                </h2>
            </div>

            <div className="mt-4 text-center">
                <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Upload New Profile Image
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        className="hidden"
                    />
                </label>
            </div>

            {errorMsg && (
                <p className="text-red-600 bg-red-100 rounded p-2 mt-2 text-center text-sm">
                    {errorMsg}
                </p>
            )}
            {successMsg && (
                <p className="text-green-600 bg-green-100 rounded p-2 mt-2 text-center text-sm">
                    {successMsg}
                </p>
            )}
        </div>
    );
};

export default ProfileImageUploader;
