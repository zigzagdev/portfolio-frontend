import { createBrowserRouter } from 'react-router-dom';
import { notFoundRoute } from './NotFoundRoute';
import { authRoutes } from './AuthRoutes';
import { dashboardRoutes } from './DashBoardRoutes';

export const appRouter = createBrowserRouter([
    ... authRoutes,
    ... dashboardRoutes,
    notFoundRoute,
]);
