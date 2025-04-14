import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { messages } from "../lib/messages";

const Dashboard: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState('');
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        try {
            setIsLoggingOut(true);
            await logout();
            navigate('/login');
            setIsLoggingOut(false);
        } catch (error) {
            console.log(error);
            setErrorMsg(messages.error.unexpected);
        }};
    return (
        <main className="bg-gray-700">
            <section className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
                    Welcome to your Dashboard
                </h1>
                <p className="text-gray-600 mb-10">
                    You are successfully logged in. You can log out using the button below.
                </p>
                <Button onClick={handleLogout} disabled={isLoggingOut} className="w-full max-w-sm mx-auto">
                    {isLoggingOut ? 'Logging out...' : 'Logout'}
                </Button>
                {errorMsg && (
                    <p className="text-red-500 mt-4">
                        {errorMsg}
                    </p>
                )}
            </section>
        </main>
    );
};

export default Dashboard;
