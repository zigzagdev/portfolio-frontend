import React, { useEffect, useState } from 'react';
import UserProfile from '../components/profile/UserProfile';
import { UserProfile as UserProfileType } from '../lib/userProfile';
import NotFound from "./NotFound";
import Spinner from "../components/ui/Spinner";
import { messages } from "../lib/messages";
import {ErrorMessage} from "../components/ui/ErrorMessage";

const UserProfilePage: React.FC = () => {
    const [user, setUser] = useState<UserProfileType | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const isMock = 'true';

                if (isMock) {
                    const mockUser: UserProfileType = {
                        id: 1,
                        firstName: 'Mock',
                        lastName: 'User',
                        email: 'mock@example.com',
                        bio: 'This is a mock bio.',
                        location: 'Tokyo, Japan',
                        skills: ['React', 'TypeScript', 'Tailwind'],
                        profileImage: 'https://i.pravatar.cc/150?u=mock',
                    };
                    setUser(mockUser);
                    return;
                }

                const res = await fetch('/api/me');
                if (!res.ok) throw new Error(messages.error.unexpected);

                const data: UserProfileType = await res.json();
                setUser(data);
            } catch (err) {
                console.error(err);
                setErrorMsg(messages.error.unexpected);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) return <Spinner size="lg" className="mx-auto mt-20" />;
    if (errorMsg) return <ErrorMessage message={errorMsg}/>;
    if (!user) return <NotFound />;

    return (
        <main className="bg-gray-100 min-h-screen py-10 px-4">
            <UserProfile user={user} />
        </main>
    );
};

export default UserProfilePage;
