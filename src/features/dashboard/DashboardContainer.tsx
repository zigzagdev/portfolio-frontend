import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { messages } from "../../lib/messages";
import Dashboard from '../../components/pages/Dashboard';
import { fetchFeed } from "../../lib/post-feed";
import { Post } from '../../features/post/types/post.types';
import { API_ENDPOINTS } from "../../constants/env";
import { fetchUserProfile } from '../../lib/user';
import { User } from '../../lib/user';
import { fetchUserPosts } from '../../lib/fetch-posts';

const DashboardContainer: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();

    const [posts, setPosts] = useState<Post[]>([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        if (!userId || !token) {
            navigate('/login');
            return;
        }

        const load = async () => {
            try {
                const [userData] = await Promise.all([
                    fetchUserProfile(userId, token),
                ]);

                setUser(userData);
                setPosts(await fetchUserPosts(userId, token));
            } catch (err) {
                console.error(err);
                setErrorMsg('Failed to load dashboard.');
            }
        };

        load();
    }, [navigate]);


    const handleLogout = async () => {
        try {
            setIsLoggingOut(true);
            await logout();
            navigate('/login');
        } catch (error) {
            console.log(error);
            setErrorMsg(messages.error.unexpected);
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <Dashboard
            posts={posts}
            onLogout={handleLogout}
            isLoggingOut={isLoggingOut}
            errorMsg={errorMsg}
        />
    );
};

export default DashboardContainer;
