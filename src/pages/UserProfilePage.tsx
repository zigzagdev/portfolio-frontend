import React from 'react';
import { mockUser } from '../mock/user';
import UserProfile from '../components/profile';

const UserProfilePage: React.FC = () => {
    return (
        <main className="bg-gray-100 min-h-screen py-10 px-4">
            <UserProfile user={mockUser} />
        </main>
    );
};

export default UserProfilePage;
