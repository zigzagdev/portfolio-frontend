import React from 'react';
import { User } from '../../lib/user';

export type UserProfileEditFormProps = {
    user: User;
    onChange: (updated: Partial<User>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading?: boolean;
    successMsg?: string;
    errorMsg?: string;
};

const UserProfileEditForm: React.FC<UserProfileEditFormProps> = ({
         user,
         onChange,
         onSubmit,
         loading = false,
         successMsg,
         errorMsg,
   }) => {
    return (
        <form onSubmit={onSubmit} className="max-w-xl mx-auto p-6 bg-white shadow rounded space-y-4">
            <h2 className="text-xl font-semibold text-center">Edit Profile</h2>

            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                </label>
                <input
                    id="firstName"
                    type="text"
                    value={user.firstName}
                    onChange={(e) => onChange({ firstName: e.target.value })}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
            </div>

            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                </label>
                <input
                    id="lastName"
                    type="text"
                    value={user.lastName}
                    onChange={(e) => onChange({ lastName: e.target.value })}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
            </div>

            <div>
                <label htmlFor="organisation" className="block text-sm font-medium text-gray-700">
                    Organisation
                </label>
                <input
                    id="organisation"
                    type="text"
                    value={user.location || ''}
                    onChange={(e) => onChange({ location: e.target.value })}
                    className="w-full border px-3 py-2 rounded"
                />
            </div>

            <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                </label>
                <textarea
                    id="bio"
                    rows={4}
                    value={user.bio || ''}
                    onChange={(e) => onChange({ bio: e.target.value })}
                    className="w-full border px-3 py-2 rounded"
                />
            </div>

            {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}
            {successMsg && <p className="text-sm text-green-600">{successMsg}</p>}

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
                disabled={loading}
            >
                {loading ? 'Saving...' : 'Save Changes'}
            </button>
        </form>
    );
};

export default UserProfileEditForm;
