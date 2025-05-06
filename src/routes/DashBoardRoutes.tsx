import { RouteObject } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import ProtectedRoute from './ProtectedRoute';
import UserProfilePage from '../pages/UserProfilePage';
import PostSubmissionFormContainer from "../features/post/submit/PostSubmissionFormContainer";
import DashboardContainer from "../features/dashboard/DashboardContainer";

export const dashboardRoutes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/dashboard',
                element: (
                    <ProtectedRoute>
                        <DashboardContainer />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/profile',
                element: (
                    <ProtectedRoute>
                        <UserProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/profile/:userId/post',
                element: (
                    <ProtectedRoute>
                        <PostSubmissionFormContainer />
                    </ProtectedRoute>
                ),
            }
        ]
    }
];
