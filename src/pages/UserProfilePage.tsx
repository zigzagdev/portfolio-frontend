import React from 'react';
import { mockUserProfile } from '../mock/userProfile';
import UserProfile from '../components/profile/UserProfile';

const UserProfilePage: React.FC = () => {
    return (
        <main className="bg-gray-100 min-h-screen py-10 px-4">
            <UserProfile user={mockUserProfile} />
        </main>
    );
};

export default UserProfilePage;
