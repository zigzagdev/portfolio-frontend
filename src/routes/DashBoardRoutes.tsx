import { RouteObject } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Dashboard from '../pages/DashBoard';
// import ProtectedRoute from './ProtectedRoute';
import UserProfilePage from '../pages/UserProfilePage';

export const dashboardRoutes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/dashboard',
                element: (
                    // <ProtectedRoute>
                        <Dashboard />
                    // </ProtectedRoute>
                ),
            },
            {
                path: '/profile',
                element: (
                    // <ProtectedRoute>
                        <UserProfilePage />
                    // </ProtectedRoute>
                ),
            },
        ]
    }
];
