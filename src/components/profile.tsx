import React from 'react';
import { User } from '../lib/user';

type Props = {
    user: User;
};

const UserProfile: React.FC<Props> = ({ user }) => {
    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={user.profileImage}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-20 h-20 rounded-full object-cover border"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{user.firstName} {user.lastName}</h2>
                    <p className="text-gray-500">{user.location}</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">{user.bio}</p>
            {user.skills && (
                <ul className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                        <li
                            key={index}
                            className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserProfile;
