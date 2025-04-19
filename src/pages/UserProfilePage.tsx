import React, { useEffect, useState } from 'react';
import UserProfile from '../components/profile/UserProfile';
import { UserProfile as UserProfileType } from '../lib/userProfile';
import NotFound from "./NotFound";
import Spinner from "../components/ui/Spinner";
import { messages } from "../lib/messages";

const UserProfilePage: React.FC = () => {
    const [user, setUser] = useState<UserProfileType | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
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
    if (errorMsg) return <p className="text-red-600">{errorMsg}</p>;
    if (!user) return <NotFound />;

    return (
        <main className="bg-gray-100 min-h-screen py-10 px-4">
            <UserProfile user={user} />
        </main>
    );
};

export default UserProfilePage;
