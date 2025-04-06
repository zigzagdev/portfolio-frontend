import { RouteObject } from 'react-router-dom';
import Register from '../pages/Register';

export const authRoutes: RouteObject[] = [
    {
        path: '/register',
        element: <Register />,
    },
];
