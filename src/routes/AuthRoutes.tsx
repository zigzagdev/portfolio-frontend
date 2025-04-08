import { RouteObject } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

export const authRoutes: RouteObject[] = [
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    }
];
