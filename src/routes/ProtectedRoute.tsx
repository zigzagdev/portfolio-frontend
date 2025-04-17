// import React, { JSX } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
//
// type Props = {
//     children: JSX.Element;
// };
//
// const ProtectedRoute = ({ children }: Props): JSX.Element => {
//     const { user } = useAuth();
//
//     if (!user) {
//         return <Navigate to="/login" replace/>;
//     }
//
//     return children;
// };
//
// export default ProtectedRoute;