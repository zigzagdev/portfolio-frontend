import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/AppRouter'
import './index.css'
import {AuthProvider} from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={appRouter} />
        </AuthProvider>
    </React.StrictMode>
)