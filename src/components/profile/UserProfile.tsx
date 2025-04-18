import React from 'react';
import { UserProfile as UserProfileType } from '../../lib/userProfile';

type Props = {
    user: UserProfileType;
};

const UserProfile: React.FC<Props> = ({ user }) => {
    return (
        <div className="p-6 bg-white shadow rounded">
            <img src={user.avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            {user.bio && <p className="mt-2 text-sm text-gray-700">{user.bio}</p>}
            {user.skills && (
                <ul className="mt-4 flex gap-2 flex-wrap">
                    {user.skills.map((skill) => (
                        <li key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {skill}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserProfile;
