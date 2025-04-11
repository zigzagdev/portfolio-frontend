import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
    return (
        <main className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-indigo-50 to-purple-100 px-4 bg-stone-900">
            <Outlet />
        </main>
    );
};

export default AppLayout;
