import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { authRoutes } from './routes/AuthRoutes';
import { dashboardRoutes } from './routes/DashBoardRoutes';
import Footer from './components/common/Footer';

const App: React.FC = () => {
    const { user } = useAuth();

    const routes = useRoutes(user ? dashboardRoutes : authRoutes);

    return (
        <>
            {routes}
            <Footer />
        </>
    );
};

export default App;
