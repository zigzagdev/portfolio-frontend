import React from 'react';
import { User } from '../../lib/user';

type Props = {
    user: User;
};

const UserProfileReadOnlyCard: React.FC<Props> = ({ user }) => {
    return (
        <div className="bg-white p-6 rounded shadow space-y-2">
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location || 'N/A'}</p>
            <p><strong>Bio:</strong> {user.bio || 'N/A'}</p>
        </div>
    );
};

export default UserProfileReadOnlyCard;
