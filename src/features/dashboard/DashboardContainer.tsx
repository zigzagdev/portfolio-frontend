import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { messages } from "../../lib/messages";
import Dashboard from '../../components/pages/Dashboard';
import { fetchFeed } from "../../lib/post-feed";
import { Post } from '../../features/post/types/post.types';

const DashboardContainer: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [posts, setPosts] = useState<Post[]>([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    useEffect(() => {
        const loadFeed = async () => {
            try {
                const data = await fetchFeed();
                setPosts(data);
            } catch (err) {
                console.error(err);
                setErrorMsg("Failed to load feed.");
            }
        };
        loadFeed();
    }, []);

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
