import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { messages } from "../../lib/messages";
import DashboardView from '../../components/pages/Dashboard';

const DashboardContainer: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState('');
    const [isLoggingOut, setIsLoggingOut] = useState(false);

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
        <DashboardView
            onLogout={handleLogout}
            isLoggingOut={isLoggingOut}
            errorMsg={errorMsg}
        />
    );
};

export default DashboardContainer;
