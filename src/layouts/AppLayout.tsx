import { Outlet } from 'react-router-dom';
import { GlobalStyleControl } from "./GlobalStyleControl";
import Header from '../components/common/Header';
import { useAuth } from '../context/AuthContext';
import React from "react";

const AppLayout: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) return null;

    return (
        <>
            {user && <Header />}
            <main className="
                min-h-screen flex items-center justify-center
                bg-gradient-to-br from-indigo-50 to-purple-100 px-4 bg-stone-900"
            >
                <GlobalStyleControl />
                <Outlet />
            </main>
        </>
    );
};

export default AppLayout;
