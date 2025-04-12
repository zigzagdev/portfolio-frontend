import { RouteObject } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Dashboard from '../pages/DashBoard';
import ProtectedRoute from './ProtectedRoute';

export const dashboardRoutes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '',
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                )
            }
        ]
    }
];
