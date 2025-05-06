import { RouteObject } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import {Landing} from "../pages/Landing";
import PasswordResetRequestForm from "../components/auth/PasswordResetRequestForm";
import PasswordResetForm from "../components/auth/PasswordResetForm";
import Dashboard from "../components/pages/Dashboard";

export const authRoutes: RouteObject[] = [
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/forgot-password',
        element: <PasswordResetRequestForm />,
    },
    {
        path: '/reset-password',
        element: <PasswordResetForm
            password={''}
            confirmPassword={''}
            onPasswordChange={() => {}}
            onConfirmPasswordChange={() => {}}
            onSubmit={() => {}}
            loading={false}
            errorMsg={''}
            successMsg={''}
        />,
    },
    {
        path: '/dashboard',
        element: <Dashboard
            isLoggingOut={false}
            errorMsg={''}
            onLogout={() => {}}
        />,
    }
];
