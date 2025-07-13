export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
    users: {
        register: `${API_BASE_URL}/users/register`,
        list: `${API_BASE_URL}/users`,
        detail: (id: string) => `${API_BASE_URL}/users/${id}`,
        create: `${API_BASE_URL}/users`,
        update: (id: string) => `${API_BASE_URL}/users/${id}`,
        delete: (id: string) => `${API_BASE_URL}/users/${id}`,
    },
    auth: {
        login: `${API_BASE_URL}/auth/login`,
        logout: `${API_BASE_URL}/auth/logout`,
        me: `${API_BASE_URL}/auth/me`,
    },
};