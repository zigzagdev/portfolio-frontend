import React from 'react';
import { ProfileImageUploaderProps } from './ProfileImageUploader.types';

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({ user, previewUrl, onFileChange }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img
                    src={previewUrl || user.profileImage}
                    alt="Avatar"
                    className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover border border-gray-300"
                />
                <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {user.firstName} {user.lastName}
                    </h2>
                </div>
            </div>

            <div className="mt-4 flex flex-col items-center">
                <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
                    Upload New Profile Image
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        className="hidden"
                    />
                </label>
            </div>

            <div className="mt-4 border-t pt-4 text-sm text-gray-600">
                <p className="break-words">{user.email}</p>
                {user.bio && <p className="mt-2">{user.bio}</p>}
                {user.skills && user.skills.length > 0 && (
                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-700 mb-2">Skills</h3>
                        <ul className="flex flex-wrap gap-2">
                            {user.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileImageUploader;
