import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

const Dashboard: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <main className="bg-gray-700">
            <section className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
                    Welcome to your Dashboard
                </h1>
                <p className="text-gray-600 mb-10">
                    You are successfully logged in. You can log out using the button below.
                </p>
                <Button onClick={handleLogout} className="w-full max-w-sm mx-auto">
                    Logout
                </Button>
            </section>
        </main>
    );
};

export default Dashboard;
